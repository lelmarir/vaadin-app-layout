package com.github.appreciated.app.layout.component;

import com.github.appreciated.app.layout.builder.design.Styles;
import com.github.appreciated.app.layout.builder.entities.Holder;
import com.github.appreciated.app.layout.notification.NotificationHolder;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;

public class NotificationsView extends VerticalLayout {

    boolean blurListenerEnabled = true;
    Holder<Boolean> showAll = new Holder<>(false);
    private NotificationHolder holder;

    public NotificationsView(NotificationHolder holder) {
        super();
        setMargin(false);
        setPadding(false);
        setWidth("300px");
        getElement().getStyle().set("padding", "5px");

        this.holder = holder;
        initView(holder);
    }

    public void initView(NotificationHolder holder) {
        removeAll();
        add(this.holder.getNotificationViews(false));
        getElement().getClassList().add(Styles.APP_BAR_NOTIFICATION_LIST);

        if (!showAll.value && this.holder.getNotificationSize() > 4) {
            Button showAllButton = new Button("Show all");
            showAllButton.setWidth("100%");
            showAllButton.setHeight("28px");
            showAllButton.addClickListener(clickEvent -> {
                showAll.value = true;
                initView(this.holder);
            });
            add(showAllButton);
        }
    }

    public boolean isShowAll() {
        return this.showAll.value;
    }

    public void setShowAll(boolean showAll) {
        this.showAll.value = showAll;
    }

    public void addNewNotification(NotificationHolder component) {
        initView(component);
    }

    public void setBlurListenerEnabled(boolean blurListener) {
        this.blurListenerEnabled = blurListener;
    }


}
