declare module 'bootstrap-layout' {
	export class Sidebar {
		init(sidebar): void;
		destroy(sidebar): void;
	}
	export class SidebarToggle {
		_onClick(e): void;
	}
	export let sidebar: Sidebar;
	export let sidebarToggle: SidebarToggle;
}

declare module 'bootstrap-layout-scrollable' {
	export class Scrollable {
		init(el): void;
	}
	export let scrollable: Scrollable;
}