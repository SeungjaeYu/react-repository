import './Main.css'

const Main = () => {




    return (
        <>
            <div>
                <section className="main">
                    <div className="main-box">

                        <h3>I build your front end code for your website</h3>
                        <a href="project.html" className="btn">My works</a>
                        <div className="social-icons">
                            <a href="#facebook"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#linkedin"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="#gethup"><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </section>



                <section className="cards" id="services">
                    <h2 className="main-title">services</h2>
                    <div className="content">

                        <div className="card">
                            <div className="icon">
                                <i className="fa-solid fa-basket-shopping"></i>
                            </div>
                            <div className="info">
                                <h3>Normal</h3>
                                <p>#infoaboutnormal</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="icon">
                                <i className="fa-solid fa-bars-staggered"></i>
                            </div>
                            <div className="info">
                                <h3>Advanced</h3>
                                <p>#infoaboutadvanced</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="icon">
                                <i className="fa-solid fa-toolbox"></i>
                            </div>
                            <div className="info">
                                <h3>Pro</h3>
                                <p>#infoaboutPro</p>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>

    )

}

export default Main;