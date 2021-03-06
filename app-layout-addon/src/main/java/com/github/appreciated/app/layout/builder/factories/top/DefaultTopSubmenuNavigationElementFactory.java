package com.github.appreciated.app.layout.builder.factories.top;

import com.github.appreciated.app.layout.builder.elements.SubmenuNavigationElement;
import com.github.appreciated.app.layout.builder.interfaces.ComponentFactory;
import com.vaadin.flow.component.button.Button;

public class DefaultTopSubmenuNavigationElementFactory implements ComponentFactory<SubmenuNavigationElement.SubmenuElement, SubmenuNavigationElement> {
    @Override
    public SubmenuNavigationElement.SubmenuElement get(SubmenuNavigationElement element) {
        SubMenuBar barmenu = new SubMenuBar(element);
        /*barmenu.addStyleName(ValoTheme.MENUBAR_BORDERLESS);
        barmenu.addStyleName(ValoTheme.MENUBAR_SMALL);
        barmenu.addStyleName("app-layout-top-menu");*/
        //addToMenuBar(barmenu, element);
        return barmenu;
    }
/*
    private void addToMenuBar(MenuBar menuBar, AbstractNavigationElement element) {
        if (element instanceof SubmenuNavigationElement) {
            SubmenuNavigationElement submenu = (SubmenuNavigationElement) element;
            MenuBar.MenuItem submenuItem = menuBar.addItem(submenu.getTitle(), submenu.getIcon(), null);
            submenu.getSubmenuElements().forEach(element1 -> {
                addToMenuBar(submenuItem, element1);
            });
        }
        if (element instanceof NavigatorNavigationElement) {
            NavigatorNavigationElement submenu = (NavigatorNavigationElement) element;
            menuBar.addItem(submenu.getCaption(), submenu.getIcon(), menuItem -> UI.getCurrent().getNavigator().navigateTo(submenu.getViewName()));
        }
        if (element instanceof ClickableNavigationElement) {
            ClickableNavigationElement submenu = (ClickableNavigationElement) element;
            menuBar.addItem(submenu.getName(), submenu.getIcon(), menuItem -> submenu.getListener().buttonClick(null));
        }
    }

    private void addToMenuBar(MenuBar.MenuItem menuBar, AbstractNavigationElement element) {
        if (element instanceof SubmenuNavigationElement) {
            SubmenuNavigationElement submenu = (SubmenuNavigationElement) element;
            MenuBar.MenuItem submenuItem = menuBar.addItem(submenu.getTitle(), submenu.getIcon(), null);
            submenu.getSubmenuElements().forEach(element1 -> {
                addToMenuBar(submenuItem, element1);
            });
        }
        if (element instanceof NavigatorNavigationElement) {
            NavigatorNavigationElement submenu = (NavigatorNavigationElement) element;
            menuBar.addItem(submenu.getCaption(), submenu.getIcon(), menuItem -> UI.getCurrent().navigate(submenu.getViewName()));
        }
        if (element instanceof ClickableNavigationElement) {
            ClickableNavigationElement submenu = (ClickableNavigationElement) element;
            menuBar.addItem(submenu.getName(), submenu.getIcon(), menuItem -> submenu.getListener().buttonClick(null));
        }
    }*/

    public class SubMenuBar extends Button implements SubmenuNavigationElement.SubmenuElement {
        public SubMenuBar(SubmenuNavigationElement element) {
            setText(element.getTitle());
        }
    }
}