import { Menu } from "../core/menu/menu.service";

const dashboard = <Menu>{
    text: '仪表盘',
    translate: 'dashboard',
    link: '/dashboard',
    icon: 'icon-speedometer',
    children: [
        {
            text: '仪表盘V1',
            link: '/dashboard/v1',
            translate: 'dashboard_v1'
        }
    ]
};

const widgets = <Menu>{
    text: '小部件',
    translate: 'widgets',
    link: '/widgets',
    icon: 'icon-grid'
};

const groupMain = <Menu>{
    text: '主导航',
    translate: 'main_navigation',
    group: true,
    children: [
        dashboard,
        widgets
    ]
};

const elements = <Menu>{
    text: '基础元素',
    translate: 'elements',
    link: '/elements',
    icon: 'icon-chemistry',
    children: [
        {
            text: '按钮',
            link: '/elements/buttons',
            translate: 'buttons'
        },
        {
            text: 'Notification',
            link: '/elements/notification',
            translate: 'notification'
        },
        {
            text: 'Spin',
            link: '/elements/spin',
            translate: 'spin'
        },
        {
            text: 'Dropdown',
            link: '/elements/dropdown',
            translate: 'dropdown'
        },
        {
            text: 'Grid',
            link: '/elements/grid',
            translate: 'grid'
        },
        {
            text: 'Grid Masonry',
            link: '/elements/gridmasonry',
            translate: 'gridmasonry'
        },
        {
            text: 'Typography',
            link: '/elements/typography',
            translate: 'typography'
        },
        {
            text: 'Font Icons',
            link: '/elements/iconsfont',
            translate: 'iconsfont'
        },
        {
            text: 'Colors',
            link: '/elements/colors',
            translate: 'colors'
        }
    ]
};

const forms = <Menu>{
    text: '表单',
    translate: 'forms',
    link: '/forms',
    icon: 'icon-note',
    children: [
        {
            text: '标准',
            link: '/forms/standard',
            translate: 'standard'
        },
        {
            text: '扩展',
            link: '/forms/extended',
            translate: 'extended'
        },
        {
            text: '校验',
            link: '/forms/validation',
            translate: 'validation'
        },
        {
            text: '上传',
            link: '/forms/upload',
            translate: 'upload'
        },
        {
            text: '图片裁剪',
            link: '/forms/cropper',
            translate: 'cropper'
        }
    ]
};

const charts = <Menu>{
    text: 'Charts',
    translate: 'charts',
    link: '/charts',
    icon: 'icon-graph',
    children: [
        {
            text: 'G2',
            link: '/charts/g2'
        },
        {
            text: 'ngx-charts',
            link: '/charts/ngxcharts',
            translate: 'ngxcharts'
        },
        {
            text: 'ChartJS',
            link: '/charts/chartjs',
            translate: 'chartjs'
        }
    ]
};

const tables = <Menu>{
    text: '表格',
    translate: 'tables',
    link: '/tables',
    icon: 'icon-grid',
    children: [
        {
            text: '标准',
            link: '/tables/standard',
            translate: 'standard'
        },
        {
            text: 'Full',
            link: '/tables/full',
            translate: 'full'
        }
    ]
};

const maps = <Menu>{
    text: '地图',
    translate: 'maps',
    link: '/maps',
    icon: 'icon-map',
    children: [
        {
            text: 'QQ',
            link: '/maps/qq',
            translate: 'qq'
        },
        {
            text: 'Baidu',
            link: '/maps/baidu',
            translate: 'baidu'
        }
    ]
};

const groupComponent = <Menu>{
    text: '组件',
    translate: 'component',
    group: true,
    children: [
        elements,
        forms,
        charts,
        tables,
        maps
    ]
};

const pages = {
    text: 'Pages',
    translate: 'pages',
    link: '/pages',
    icon: 'icon-doc',
    children: [
        {
            text: 'Login',
            link: '/login',
            translate: 'm-login'
        },
        {
            text: 'Register',
            link: '/register',
            translate: 'm-register'
        },
        {
            text: 'Forget',
            link: '/forget',
            translate: 'm-forget'
        },
        {
            text: 'Lock',
            link: '/lock',
            translate: 'm-lock'
        },
        {
            text: '404',
            link: '/404'
        },
        {
            text: '500',
            link: '/500'
        },
        {
            text: 'Maintenance',
            link: '/maintenance',
            translate: 'maintenance'
        }
    ]
};

const logics = <Menu>{
    text: 'Common Logics',
    translate: 'logics',
    link: '/logics',
    icon: 'icon-compass',
    children: [
        {
            text: 'Route Guard',
            link: '/logics/guard',
            translate: 'guard'
        }
    ]
};

const extras = <Menu>{
    text: 'Extras',
    translate: 'extras',
    link: '/extras',
    icon: 'icon-cup',
    children: [
        {
            text: 'Help Center',
            link: '/extras/helpcenter',
            translate: 'helpcenter'
        },
        {
            text: 'Settings',
            link: '/extras/settings',
            translate: 'settings'
        }
    ]
};

const groupMore = <Menu>{
    text: 'More',
    translate: 'more',
    group: true,
    children: [
        logics,
        pages,
        extras
    ]
};

export const menu = [
    groupMain,
    groupComponent,
    groupMore
];
