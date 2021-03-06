package com.github.appreciated.app.layout.component;

import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;

/**
 * A simple container component which may contain an image and two labels concerned component won't be added to its parent
 */
public class MenuHeaderView extends VerticalLayout {

    public MenuHeaderView(String title, String subtitle, String src) {
        setMargin(false);
        setId("menu-header-wrapper");
        if (src != null) {
            add(new RoundImage(src, "60px", "60px"));
        }
        if (title != null) {
            Label titleLabel = new Label(title);
            titleLabel.setId("menu-header-title");
            add(titleLabel);
        }
        if (subtitle != null) {
            Label subtitleLabel = new Label(subtitle);
            subtitleLabel.setId("menu-header-subtitle");
            add(subtitleLabel);
        }

    }

}