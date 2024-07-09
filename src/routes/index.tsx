import { useRoutes } from 'react-router-dom';
// // 页面路由配置
import ReactLazilyComponent from 'react-lazily-component';
import generatedRoutes from '~react-pages'

const commonRoutes = [
    {
        path: '/login',
        Component: ReactLazilyComponent(() => import('@/layout/Login'))
    },
    {
        path: '/',
        Component: ReactLazilyComponent(() => import('@/pages/home/index'))
    },
    {
        path: '/*',
        Component: ReactLazilyComponent(() => import('@/layout/NotFound'))
    },
]
function Router() {
    return useRoutes([...commonRoutes, ...generatedRoutes])
}

export default Router
