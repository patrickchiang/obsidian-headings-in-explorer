import 'obsidian';

declare module 'obsidian' {
    interface Editor {
        removeHighlights(): void;
    }

    interface View {
        headerDom: HeaderDom;
        revealInFolder(file: TFile | null): void;
    }

    interface NavButton {
        addClass(className: string): void;
    }

    interface HeaderDom {
        navButtonsEl: HTMLElement;
        addNavButton(icon: string, tooltip: string, callback: () => void): NavButton;
    }
}