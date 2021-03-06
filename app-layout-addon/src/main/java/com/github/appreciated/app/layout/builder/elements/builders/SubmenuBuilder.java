package com.github.appreciated.app.layout.builder.elements.builders;

import com.github.appreciated.app.layout.builder.AppLayoutBuilder;
import com.github.appreciated.app.layout.builder.elements.NavigatorNavigationElement;
import com.github.appreciated.app.layout.builder.elements.SubmenuNavigationElement;
import com.github.appreciated.app.layout.builder.entities.DefaultBadgeHolder;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.icon.Icon;


/**
 * A Builder to build {@link SubmenuNavigationElement} this buider is meant to be used in combination with the {@link AppLayoutBuilder}
 */
public class SubmenuBuilder extends ViewClassSubmenuBuilder<SubmenuBuilder> {

    private SubmenuBuilder(String title, Icon icon) {
        super(title, icon);
    }

    /**
     * returns a SubmenuBuilder with a predefined expanding element that only has a title
     *
     * @param title
     * @return
     */
    public static SubmenuBuilder get(String title) {
        return new SubmenuBuilder(title, null);
    }

    /**
     * returns a SubmenuBuilder with a predefined expanding element that only has an icon
     *
     * @param icon
     * @return
     */
    public static SubmenuBuilder get(Icon icon) {
        return new SubmenuBuilder(null, icon);
    }

    /**
     * returns a SubmenuBuilder with a predefined expanding element that has an icon and a title
     *
     * @param icon
     * @return
     */
    public static SubmenuBuilder get(String title, Icon icon) {
        return new SubmenuBuilder(title, icon);
    }

    /**
     * Adds a MenuElement that has a title and an icon and also shows a badge showing a number
     *
     * @param caption
     * @param badgeHolder
     * @return
     */
    public SubmenuBuilder add(String caption, Icon icon, DefaultBadgeHolder badgeHolder) {
        return add(caption, icon, badgeHolder, (Component) null);
    }

    /**
     * Adds a MenuElement the shows a caption and that if clicked navigates to the View passed as parameter
     *
     * @param caption
     * @param element
     * @return
     */
    public SubmenuBuilder add(String caption, Component element) {
        return add(caption, null, (DefaultBadgeHolder) null, element);
    }

    /**
     * Adds a MenuElement the shows a caption and a icon and that if clicked navigates to the View passed as parameter
     *
     * @param caption
     * @param element
     * @return
     */
    public SubmenuBuilder add(String caption, Icon icon, Component element) {
        return add(caption, icon, null, element);
    }

    /**
     * Adds a MenuElement the shows a caption and a icon. Also it shows a badge containing a number. If clicked navigates to the View passed as parameter
     *
     * @param caption
     * @param element
     * @return
     */
    public SubmenuBuilder add(String caption, Icon icon, DefaultBadgeHolder badgeHolder, Component element) {
        this.add(new NavigatorNavigationElement(caption, icon, badgeHolder, element));
        return this;
    }

    public SubmenuBuilder add(String caption, String path, Icon icon, Component element) {
        return this.add(caption, path, icon, null, element);
    }

    public SubmenuBuilder add(String caption, String path, Icon icon, DefaultBadgeHolder badgeHolder, Component element) {
        this.add(new NavigatorNavigationElement(caption, path, icon, badgeHolder, element));
        return this;
    }
}
