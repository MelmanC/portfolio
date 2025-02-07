import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <div className='row'>
          <h1 style={{ fontSize: '70px', color: 'white', marginBottom: '12px' }}>
            Hey, I'm <br /> Nolann Dubos
          </h1>
          <br />
          <p style={{
            fontSize: '30px',
            color: 'grey',
            borderBottom: '1px solid white',
            paddingBottom: '5px',
            width: 'auto',
          }}>
            French student
          </p>
        </div>
        <img src='/Logo.png' alt='logo' width='500' />
      </div>

      <div className='about'>
        <div className='navBar'>
          <a href='https://github.com/MelmanC' target='_blank'>
            <img src="/github.png" /></a>
          <a href='https://www.linkedin.com/in/nolann-dubos-9319a4297/' target='_blank'>
            <img src="/linkedin.png" /></a>
        </div>
        <div style={{
          marginTop: '17rem',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}>
          <h1 style={{
            color: 'white', fontSize: "7rem", borderBottom: '1px solid white',
            paddingBottom: '5px',
            width: 'auto',
          }}>
            Projects
          </h1>

          <div className='project'>
            <h2 style={{ color: 'white', fontSize: '3rem' }}>
              <a href='https://github.com/MelmanC/c-server' target='_blank' style={{
                textDecoration: 'none',
                color: 'white',
              }}>Web server in C
              </a>
            </h2>
            <p style={{ color: 'white', fontSize: '1rem' }}>This project aims to implement an http server in c</p>
          </div>

          <div className='project'>
            <h2 style={{ color: 'white', fontSize: '3rem' }}>
              <a href='https://github.com/MelmanC/EpitechYear1/tree/main/Corewar' target='_blank' style={{
                textDecoration: 'none',
                color: 'white',
              }}>Corewar
              </a>
            </h2>
            <p style={{ color: 'white', fontSize: '1rem' }}>This project aims to recreate the corewar in c</p>
          </div>

          <div className='project'>
            <h2 style={{ color: 'white', fontSize: '3rem' }}>
              <a href='https://github.com/MelmanC/EpitechYear1/tree/main/Myrpg' target='_blank' style={{
                textDecoration: 'none',
                color: 'white',
              }}>MyRPG
              </a>
            </h2>
            <p style={{ color: 'white', fontSize: '1rem' }}>This project aims to create a game in CSFML</p>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
