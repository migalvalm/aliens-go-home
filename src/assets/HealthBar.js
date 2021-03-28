import './HealthBar.scss';

export const HealthBar = () => { 
    return (
        <div className="container" > 
            <svg class="title" xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 9 7" shape-rendering="crispEdges">
                <path stroke="#222034" d="M0 0h9M0 1h1M2 1h1M4 1h1M8 1h1M0 2h1M2 2h1M4 2h1M6 2h1M8 2h1M0 3h1M4 3h1M8 3h1M0 4h1M2 4h1M4 4h1M6 4h3M0 5h1M2 5h1M4 5h1M6 5h1M0 6h7" />
                <path stroke="#ffffff" d="M1 1h1M3 1h1M5 1h3" />
                <path stroke="#f2f2f5" d="M1 2h1M3 2h1M5 2h1M7 2h1M1 3h3M5 3h3M1 4h1M3 4h1M5 4h1M1 5h1M3 5h1M5 5h1" />
            </svg>
            <svg class="healthbar" xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 38 9" shape-rendering="crispEdges">
                <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
                <path stroke="#222034" d="M2 0h34M1 1h1M36 1h1M0 2h1M3 2h32M37 2h1M0 3h1M2 3h1M35 3h1M37 3h1M0 4h1M2 4h1M35 4h1M37 4h1M0 5h1M2 5h1M35 5h1M37 5h1M0 6h1M3 6h32M37 6h1M1 7h1M36 7h1M2 8h34" />
                <path stroke="#ffffff" d="M2 1h34" />
                <path stroke="#f2f2f5" d="M1 2h2M35 2h2M1 3h1M36 3h1M1 4h1M36 4h1M1 5h1M36 5h1M1 6h2M35 6h2M2 7h34" />
                <path stroke="#323c39" d="M3 3h32" />
                <path stroke="#494d4c" d="M3 4h32M3 5h32" />
                <svg x="3" y="2.5" width="32" height="3">
                    <rect class="healthbar_fill" height="3" />
                    <rect class="healthbar_fill healthbar_fill-top" height="1" />
                </svg>
            </svg>
        </div>
    )
}