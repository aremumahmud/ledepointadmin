import logo from  '../assets/logo100.png'

function Loader(){

    return (
        <div className="image" style={{
            display:'flex',
            position:'fixed',
            zIndex:2000,
            alignItems:'center',
            justifyContent:'center',
            width:'100%',
            height:'100%',
            background:'#fff'
        }}>
            <img style={{
                width:'15%',
                animation:'heartbeat 1.5s infinite'
            }} src={logo} alt="" />
        </div>
    )

}

export default Loader