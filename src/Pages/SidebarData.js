import React from 'react'
import * as GoIcons from 'react-icons/go'
import * as FcIcons from 'react-icons/fc'
import * as icons from 'dnb-ui-lib/icons'

export const SidebarData = [
    {
        title : 'Home',
        path : '/',
        icon: <icons.home />,
        cName: 'nav-text'
    },
    {
        title : 'Dashboard',
        path : '/Dashboard',
        icon : <icons.widget_android/>,
        cName : 'nav-text'
    },
    {
        title : 'Request',
        path : '/Request',
        icon : <GoIcons.GoRequestChanges />,
        cName : 'nav-text'
    },
    {
        title : 'Approval',
        path : '/Approval',
        icon : <FcIcons.FcApproval />,
        cName : 'nav-text'
    }
]