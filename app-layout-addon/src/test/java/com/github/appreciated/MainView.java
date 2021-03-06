package com.github.appreciated;

import com.github.appreciated.app.layout.behaviour.Behaviour;
import com.github.appreciated.app.layout.builder.AbstractAppLayoutBuilderBase;
import com.github.appreciated.app.layout.builder.AppLayoutBuilder;
import com.github.appreciated.app.layout.builder.design.AppLayoutDesign;
import com.github.appreciated.app.layout.builder.elements.builders.SubmenuBuilder;
import com.github.appreciated.app.layout.builder.entities.DefaultBadgeHolder;
import com.github.appreciated.app.layout.component.MenuHeaderView;
import com.github.appreciated.app.layout.component.button.AppBarNotificationButton;
import com.github.appreciated.app.layout.notification.DefaultNotification;
import com.github.appreciated.app.layout.notification.DefaultNotificationHolder;
import com.github.appreciated.app.layout.notification.Priority;
import com.github.appreciated.app.layout.router.AppLayoutRouterLayout;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.page.Viewport;
import com.vaadin.flow.component.radiobutton.RadioButtonGroup;

import java.util.function.Consumer;

import static com.github.appreciated.app.layout.builder.Section.FOOTER;
import static com.github.appreciated.app.layout.builder.Section.HEADER;
import static com.github.appreciated.app.layout.notification.Priority.MEDIUM;

/**
 * The main view contains a button and a template element.
 */


@Viewport("width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=yes")
public class MainView extends AppLayoutRouterLayout {
    private Behaviour variant;
    DefaultNotificationHolder notifications = new DefaultNotificationHolder();
    DefaultBadgeHolder badge = new DefaultBadgeHolder();
    private Thread currentThread;

    public MainView() {
        //notifications.addClickListener(newStatus -> Notification.show(newStatus.getTitle()));
    }

    @Override
    public AbstractAppLayoutBuilderBase getAppLayoutElementBase() {
        if (variant == null) {
            variant = Behaviour.LEFT;
            notifications = new DefaultNotificationHolder();
            badge = new DefaultBadgeHolder();
        }
        notifications.addNotification(new DefaultNotification("Test1", "Test1"));
        notifications.addNotification(new DefaultNotification("Test2", "Test2"));
        notifications.addNotification(new DefaultNotification("Test3", "Test3"));
        badge.setCount(3);

        if (!variant.isTop()) {
            return AppLayoutBuilder.get(variant)
                    .withTitle("App Layout")
                    .addToAppBar(new AppBarNotificationButton(VaadinIcon.BELL.create(), notifications))
                    .addToAppBar(new AppBarNotificationButton(VaadinIcon.BELL.create(), notifications))
                    .withDesign(AppLayoutDesign.MATERIAL)
                    .add(new MenuHeaderView("App-Layout", "Version 2.0.0", "frontend/images/logo.png"), HEADER)
                    .addClickable("Set Behaviour HEADER", VaadinIcon.COG.create(), clickEvent -> openModeSelector(variant), HEADER)
                    .add("Home", VaadinIcon.HOME.create(), badge, View1.class)
                    .add(SubmenuBuilder.get("My Submenu", VaadinIcon.PLUS.create())
                            .add(SubmenuBuilder.get("My Submenu", VaadinIcon.PLUS.create())
                                    .add("Charts", VaadinIcon.SPLINE_CHART.create(), View2.class)
                                    .add("Contact", VaadinIcon.CONNECT.create(), View3.class)
                                    .add("More", VaadinIcon.COG.create(), View4.class)
                                    .build())
                            .add("Contact1", VaadinIcon.CONNECT.create(), View3.class)
                            .add("More1", VaadinIcon.COG.create(), View4.class)
                            .build())
                    .add(SubmenuBuilder.get("My Submenu", VaadinIcon.PLUS.create())
                            .add(SubmenuBuilder.get("My Submenu", VaadinIcon.PLUS.create())
                                    .add("Charts4", VaadinIcon.SPLINE_CHART.create(), View2.class)
                                    .add("Contact4", VaadinIcon.CONNECT.create(), View3.class)
                                    .add("More4", VaadinIcon.COG.create(), View4.class)
                                    .build())
                            .add("Contact2", VaadinIcon.CONNECT.create(), View3.class)
                            .add("More2", VaadinIcon.COG.create(), View4.class)
                            .build())
                    .add("Menu", VaadinIcon.MENU.create(), View5.class)
                    .addClickable("Set Behaviour FOOTER", VaadinIcon.COG.create(), clickEvent -> openModeSelector(variant), FOOTER);
        } else {
            return AppLayoutBuilder.get(variant)
                    .withTitle("App Layout")
                    .addToAppBar(new AppBarNotificationButton(VaadinIcon.BELL.create(), notifications))
                    .addToAppBar(new AppBarNotificationButton(VaadinIcon.BELL.create(), notifications))
                    .withDesign(AppLayoutDesign.MATERIAL)
                    .addClickable("Set Behaviour 1", VaadinIcon.COG.create(), clickEvent -> openModeSelector(variant), HEADER)
                    .add("Home", VaadinIcon.HOME.create(), badge, View1.class)
                    .add("Contact", VaadinIcon.SPLINE_CHART.create(), View2.class)
                    .addClickable("Set Behaviour 2", VaadinIcon.COG.create(), clickEvent -> openModeSelector(variant), FOOTER)
                    .add("More", VaadinIcon.CONNECT.create(), View3.class, FOOTER);
        }
    }

    private void reloadNotifications() {
        if (currentThread != null && !currentThread.isInterrupted()) {
            currentThread.interrupt();
        }
        badge.clearCount();
        notifications.clearNotifications();
        currentThread = new Thread(() -> {
            try {
                Thread.sleep(3000);
                for (int i = 0; i < 10; i++) {
                    Thread.sleep(1000);
                    addNotification(MEDIUM);
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });
        currentThread.start();
    }

    private void addNotification(Priority priority) {
        getUI().ifPresent(ui -> {
            badge.increase();
            notifications.addNotification(new DefaultNotification("Title" + badge.getCount(), "Description" + badge.getCount(), priority));
        });
    }

    private void setDrawerVariant(Behaviour variant) {
        this.variant = variant;
        reloadConfiguration();
        //reloadNotifications();
    }

    private void openModeSelector(Behaviour variant) {
        new BehaviourSelector(variant, variant1 -> setDrawerVariant(variant1)).open();
    }


    class BehaviourSelector extends Dialog {
        public BehaviourSelector(Behaviour current, Consumer<Behaviour> consumer) {

            VerticalLayout layout = new VerticalLayout();
            add(layout);
            RadioButtonGroup<Behaviour> group = new RadioButtonGroup<>();
            group.setItems(Behaviour.LEFT,
                    Behaviour.LEFT_OVERLAY,
                    Behaviour.LEFT_RESPONSIVE,
                    Behaviour.LEFT_HYBRID,
                    Behaviour.LEFT_HYBRID_SMALL,
                    Behaviour.LEFT_RESPONSIVE_HYBRID,
                    Behaviour.LEFT_RESPONSIVE_HYBRID_NO_APP_BAR,
                    Behaviour.LEFT_RESPONSIVE_HYBRID_OVERLAY_NO_APP_BAR,
                    Behaviour.LEFT_RESPONSIVE_OVERLAY,
                    Behaviour.LEFT_RESPONSIVE_OVERLAY_NO_APP_BAR,
                    Behaviour.LEFT_RESPONSIVE_SMALL,
                    Behaviour.LEFT_RESPONSIVE_SMALL_NO_APP_BAR,
                    Behaviour.TOP,
                    Behaviour.TOP_LARGE);
            group.setValue(current);
            layout.add(group);
            group.addValueChangeListener(singleSelectionEvent -> {
                consumer.accept(singleSelectionEvent.getValue());
                close();
            });
        }
    }


}
