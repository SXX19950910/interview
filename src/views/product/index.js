import Header from '../../components/Layouts/Header'
import LeftMenu from '../../components/Layouts/LeftMenu'
import Content from '../../components/Layouts/Content'


export default function Product() {
    return (
        <div className={'app-wrap'}>
            <Header />
            <div className={'body-area flex items-center flex-nowrap w-full'}>
                <LeftMenu />
                <Content className={'w-2/3 w-full'} />
            </div>
        </div>
    )
}