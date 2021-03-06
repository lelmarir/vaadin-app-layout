package com.github.appreciated.app.layout.annotations;

import com.github.appreciated.app.layout.builder.interfaces.ComponentFactory;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

/**
 * This annotation is meant to be used in combination with
 * {@link com.github.appreciated.app.layout.builder.AppLayoutBuilder#withNavigationElementProvider(ComponentFactory)}
 *
 * The value of this annotation will be used for the {@link com.github.appreciated.app.layout.builder.elements.NavigatorNavigationElement} as the caption of the button
 */
@Retention(RetentionPolicy.RUNTIME)
public @interface MenuCaption {
    String value();
}
