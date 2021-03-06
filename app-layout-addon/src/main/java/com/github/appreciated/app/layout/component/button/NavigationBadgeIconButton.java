package com.github.appreciated.app.layout.component.button;

import com.github.appreciated.app.layout.builder.elements.ClickableNavigationElement;
import com.github.appreciated.app.layout.builder.elements.NavigatorNavigationElement;
import com.github.appreciated.app.layout.builder.entities.DefaultBadgeHolder;
import com.github.appreciated.app.layout.builder.interfaces.NavigationElementComponent;
import com.github.appreciated.app.layout.builder.interfaces.NavigationElementContainer;
import com.github.appreciated.app.layout.webcomponents.appmenu.AppMenuItem;
import com.github.appreciated.app.layout.webcomponents.paperbadge.PaperBadge;
import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.ComponentEventListener;
import com.vaadin.flow.component.HasElement;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.icon.Icon;

public class NavigationBadgeIconButton extends AppMenuItem implements NavigationElementComponent, NavigationElementContainer {

    private final PaperBadge badge;
    private NavigatorNavigationElement element;

    public NavigationBadgeIconButton(NavigatorNavigationElement element) {
        this(element.getCaption(), element.getIcon(), element.getBadgeHolder(), null);
        this.element = element;
    }

    public NavigationBadgeIconButton(String name, Icon icon, DefaultBadgeHolder status, ComponentEventListener<ClickEvent<Button>> listener) {
        super(name, icon.getElement().getAttribute("icon"));
        setId("menu-btn");
        badge = new PaperBadge(this);
        badge.getElement().getStyle()
                .set("--paper-badge-background", "var(--app-layout-bar-background-color)")
                .set("--paper-badge-text-color", "var(--app-layout-bar-font-color)")
                .set("margin-top", "72px")
                .set("margin-left", "-25px");
        add(badge);
        if (status != null) {
            status.addListener((newStatus) -> setStatus(newStatus));
        }
        setStatus(status);
        if (listener != null) {
            setClickListener(appMenuIconItemClickEvent -> listener.onComponentEvent(null));
        }
        getItem().getElement().getStyle().set("white-space", "nowrap");
    }

    public NavigationBadgeIconButton(ClickableNavigationElement element) {
        this(element.getName(), element.getIcon(), null, null);
    }

    private void setStatus(DefaultBadgeHolder status) {
        if (status != null) {
            int unreadNotifications = status.getCount();
            if (unreadNotifications > 0) {
                badge.setVisible(true);
                if (unreadNotifications < 10) {
                    badge.setLabel(String.valueOf(unreadNotifications));
                } else {
                    badge.setLabel("9+");
                }
            } else {
                badge.setVisible(false);
            }
        } else {
            badge.setVisible(false);
        }
    }

    @Override
    public void setNavigationIcon(String resource) {
        setNavigationIcon(resource);
    }

    @Override
    public void setNavigationCaption(String string) {
        setText(string);
    }

    @Override
    public void setClickListener(ComponentEventListener listener) {
        super.setClickListener(listener);
    }

    @Override
    public boolean setActiveNavigationElementWithViewClass(HasElement element) {
        if (this.element != null && this.element.getViewClassName() == element.getClass()) {
            setActive();
            return true;
        } else {
            return false;
        }
    }
}
