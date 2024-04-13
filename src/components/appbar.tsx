
const links = [
    {
title: '친구',
        url: '/'
    },
    {
        title: '채팅',
        url: '/chat'
    },
]





export default function Appbar() {


    return (
        <div className="bg-primary-light">
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-4">
                            {
                                links.map((link) => (
                                    <a href={link.url} className="">{link.title}</a>
                                ))
                            }

                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="#" className="text-color-1">Login</a>
                        <a href="#" className="text-color-1">Register</a>
                    </div>
                </div>
            </div>
        </div>
    )
}