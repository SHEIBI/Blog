import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './topbar.css'

export default function TopBar() {
    // const user=false;
    const {user, dispatch}=useContext(Context);
    const PF = "http://localhost:5000/images/"

    const handleLogout=() =>{
        dispatch({ type:"LOGOUT" });
    }
  return (
    <div className='top'>
        <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className='topList'>
                <li className='topListItem'>
                    <Link className='link' to="/">HOME</Link>
                    </li>
                <li className='topListItem'><Link className='link' to="/">ABOUT</Link></li>
                <li className='topListItem'><Link className='link' to="/">CONTACT</Link></li>
                <li className='topListItem'><Link className='link' to="/write">WRITE</Link></li>
                <li className='topListItem' onClick={handleLogout}>{user && "LOGOUT"}</li>
            </ul>
        </div>
        <div className="topRight">
            
            { user?(
            <Link to="/settings">
                    <img className='topImg' 
                    src={PF+user.profilePic} 
            // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///82NjY0NDQxMTEtLS0iIiIoKCglJSUrKysAAAAfHx84ODgaGhoWFhYgICAcHBz4+Pjy8vLr6+vn5+e9vb3V1dXd3d1ERESGhoadnZ1tbW19fX3KyspTU1Ovr68+Pj4ODg6kpKSTk5NKSkpaWlplZWW5ubmsrKx1dXViYmLGxsaVlZV/f39ZWVmLi4tsbGz9x3SoAAANd0lEQVR4nO1dCXeiPBQtCXtEEASloqK0rq3z///dB7iUJUFC0hK+4z1n5sxMHcI129vf29sLL7zwwgsvvPAniLy+3+C34a7D/zvHqSG/bwL3jonT9wtxheunfDaWqsSWNRrZtqLJ6+Tza7vy/jc8/eR8egs+IJKQdAUAUFbtePy+cft+OT5wFrERQ6kKJEHNSFZDn0lveoCKXGP3YAkV7TzgiZxMP6Cpg3y+yNDgZqDz6OxnI/lOj0Ax/xGwl0HfL9sFUTICDTNX4ikrm75flx6hVT9bGmAdJn2/MSXmFg2/FCoc1oETWo2HSx1IAsaQNqNnSM3nJ5aiNSCK/8g3YAPgbDC3RmB0IZgeN6u+37wtLmo3hvKh7zdviQnVPfFAKqd+DGSZruyODJG6HMQ6ddeA7hgtUIQmEv/m92edDtIbRaQnfRN4hpMOKW/CCktr1zeFZvhmt2PmB0DwW1GCLBOYI476JtGErcJMEOlffbNogGukZwUbv3SZrgU+Ts8a6wxmiMU1HztL1mMmAxpN+yZChBdzIJgqw9u+iRDRUVyrQmABfN5Rp6gAvvdNhIj3zvLai6EoWOhcGAq8D7d89qE675sIEXuTC0Ml7JsIESeLWSrNYIurP3kxD4bI8vsmQoRHa8rHMxRYLnX5nDS2uAwn67b+tEYAcX00zjcP3QIkAuuH7zwYwqPAhpo5D7FNXvRNowEXlf26QLq4Is3bW6hxYCiwApyqwCaHK1/oqIWIh9gmsJmGj9iGYnGFtvRC5GCKQoa4F37KcMRhlcYCX4dvjgSYHE/ZFEqayAzfluyOGcF9TwtWsQ1J8F/fJBoQHpOODu7iHCZHYa0YgSUDxLgP0/8PoLD3xUbJ+PGQakSdxAUHuTuHLqrB9MDHICywSZiTyTudQ1E1xC0XD3AK9dI3FQJWfEzeEhrv+6ZCgM/FXJpCWJNwoHBiqIgaLOzO+BAEa2H1p08exkRJgp99EyGCkx9fYGMbH+8assQ11HgjDgTTo1RczwyfmCi4FFgF5rIRBd6G2UakTZXBwDr1TaMBDvNGTL8fS+BFmipQzM4nJKzqdMXpavRmWKki3xU51izmRJSlPsO+KTxBYJpq94QSSVXEjmPP4K72XS/FlOBmL6riVET3ex/MBI5RKGIhdzxqBD9Gf7CyO25EYe2kVXQN/kKxqLp9Fc6yW2iU0KkkZXSMpJVFFrnL8I0uG1F4aaaIbtKp1fdrU6DTMh3QIs0T8unXqfjyWhEzWrEGSUDt+6WpsFKoJ1ETOdgLA41SSUSSMpjL8IqQLl0WiZxGgocLKeUafSgS2wMXqklEqqhuXzLcNc0MAji4KaR0RMFvoU2IWNBp+mAmrMuQCHdGddQAcb0xJHh0Uo02vH1I6dQfDcHGVoZPFS4sckYeCZQM7QFpvzfs6KoPCJ1kgQdl+szgxNLMHUy1SmVxc/BJoCwsCD/6fmFqUCZbwmXfL0wNSvcMEL6IWQ0Jnat0QPbuG6iTngcnmAZ0ixRJ+tCEGp/SJoyUQVlLU0SU0bTIFDlOCIcTbb7seGiC6ZSSIRqcYJrOIR1FU9ySLTX42ZnhQcqoGjVT8oNBLNXQyM/9MJZap3mln4vzJJLAEDkX/wp3actXk8s+pnBdxNcoDHc2RoLf/LsxfBgGdy1DMrIZvBVIdr4htEUOOfEOqWIPHkHMU7PdXgQ/hXU/U2nWPIpqd3P2UibIwOPjXyK9hfiNoPJzvmTlX5AuhyJawL3z0s6nrJipHEgyenZrQLkgr+URuAiYs20gFsloOzO023yVcrHdtdx43iBJLvlkFnoeZCoBNZYuoshxzm5hWepPpYGyxcVJmi1SetlhcQ/2Tyce6Fb8vut9JoPdx+jW7OjeL6cSYOgcG7ISkVbJrbjcv4/r06AyWu57PHf8cAkr5btRPYTSWZBzhcbVklD1NFSo6MnZ72EqJ/58qSiwWvoZwzCdmBFuL6b/YtY+etaqn0z/CjU7+Yr+1P02mS5mllqjd30fTJpyiLd/m3UrcFhjmIt+CKrW+rD7I1POZH9QLB08GLVg+LbHURxhhJc6QwRuNIE8Gv1BK7ogTIxxc2sAbDGyXbU0D5IMXDozpiA4evyet6KbnX/PoOOcLlasPZVS8MHakVWqXINgjFWUnia8o/SmjL+mv7Beg91RV9Q22gIhHD3Qi6cusPGGp636TATKtqWs6N87npfIJLsW7CwEqI0gTfKxeOsfTwZUCUvtorbTuAA05eXW57ArHW+3PSS20lpjR0SGb5PlXWCRZ6QJmOutGOafgdpo9n5ZeSwr1g2X8UiV6azXMrFGkHPUcq1fTYha7qIdwzuArJpxsu2sNJ9tpUNHlaYqSIcs16SptiV9dh9CULO6uVc9NJau6WSUDBuy6bOS5qipqxN1zfPrLaLZHc4dP++NSk+wydd5yA3hSCWnMv/rmDIFDGpVy1e6Fswlp2LP75Z+lTjNXRnSZw97685DEYvkFqRTjdRK5th9WErn1Xv3tHNS3Y6S4GbhDWoshYjlbxqCJ5shlRfv6zyVEhSQgTXiTxKGYtImjeej+xqVbvb5KqKKfRgZOLnUZSmXDeT2evKUqRySidkQvlYSirI/40RvyoDGCpT2xZe6Ndm8AxNm6CFYu3aAWhe+A6ZaWnDdmmHHJps3jOpvnuiYexWi2qrymVrxtK/tyrZIcc0bVlWfd0bXPNc+57NVnWiddvPFVvpBw3jINrXDGWGsNG87tu+2degYY1Ey7DhZC+TibYFs3KXPWLUPGe00qYixoDO+iOy5+FQkWVhLAGMFH2S2O00vrPVJ8KExm+L5FWP1Hcowozpgq4R+h7lJhYYXyXY/35yO/wTjEZfCbLNMg5i1yiqc4Z/8UG8hQYT8lJkGTt+7lYZx1hibNKaTiJVMC9e5gn0Rh7U6KJJa9b/kUDhPwfYt/izY2rCzPGWsu4ja9Tfx6p4DamDFp2KSPj71/sC2SHO06EA/5VFVDic+FYuZI4CrJGQwb490g9QFpSq49L9T62flqXTLIrt+c6UCDTvDQpwEAUw66M849X32UTJMIrCuiQWf7BXrs6GfGU/ZpPs76j0qTlXnk109jSadimnUMHp2X2zYWxZnqNU6rl11NZNcyKeC7dM60lxqO6aA5VM7qEvzleOUT1VJsrhxxwRx6SuWvn9ZScQUM6+cCd0qvmAgN1sVozGfYVDZtj/BpcyW07e5FXQfN4finvnUyU1R8iR4uKWhFb9sl0+T1iwqrrk/BnVNEiJK6XYBboLsIsMNj05RV8hNBB1eFbmzC69w1vgYtQgVLVa8zplMOB03CW4nPndFPlAxND3CiIKo9AFOBeuz5+Ll/vtaaelGb4Nivt0UJ0cURch/OgeZ9IZGDYrbWsmg/OyzDW71F+5mj9dBmqtQSgPDLuWdiCMVQhZwFZRR4ULEBAoxDGyQ/RcBl263D9gPHQrrJigsY425A88DqLGf8J629lHzUD8WKezq/0kb3Sm3d+MDlawjcmmy+QOg3R+cYBk+FCjsj7ujQUekK0fyFGi0a37wTZXzOXTcK8EmbUSHzedUA7rb9138Arx73tlLZFfGNUhaMJcOlOWhruJFgKegXYUal5dW8QDRuB9yPLOvuMUpRvgHm1cNsW20XnvopF5DjF61GtC9xfYJL+5e00YntHXPnoMUlsVP+n0AXa0ZeH/ELW10z0+ruAMAvF3Y5aZYFMZC2a2/wgv0eZsHJ+kQHfgEpP7zPBrB1sbKg1wI5UzlbDFNebQurYJgcOPVcquE3F2Kvw4QzIQa/lsjS8XBp6Jy6vRTGSyzixJYZKb9qGPt72YQYs252PNryKx7a0IMdSrVHX9nUGwIq/PN/dTOoUzfSNqf4vj8T7f8y8RGD3rg8XOuA6ZKEomG4vIW2PIR018mzlYTaAp7I1jcgFZEoqGe+DSIqgJoeDfiZA/trl0NyECpHkho9IzADPAzzzyeKptaSHRAnQ6GwsXHVQKRRmYn5ksRAc34bC7M4Gy+ja5tVPoGAnqchC3iTYLtOpYHRTJPSQCyJc3bxnpPosV6NBySmRULjtDhRJUf5J7+rW3KfKC+AKAtHacdsrzc0ztUfkOS44dbqt5x2jnzyTnNLUu9nq5irVmU7SEEdcs4MKdb+mFi5PekSBTzFuxjY33mVCFsslrAWKOtGvSbgGqsHfZc054nwfYT5hnqfRBCxT+lS1M9XvzfSF33ovlHxrJluix/iumloNry9yL6zTpEQXRZIiUvhfF3OxNd9502BsnX6S/KZLjR5kNXFJUgUPNmJ2WJaelwy/D0pzWkgt05MYwxtnYEP3rputSV2FhfVj0VjvRW50/VsDQZ3hftgy1rPHNWfEi1DOW47bN8Sw5ncgrnRxBbii4XtaHWFO/yBHocJ7KuWDH8+DpPJ71X4LnDmbj+5ut9iUzLVmUIqARadJ1+ANNZG1s2WL4vwsh1hSFXhOMF/ury/rFcy4ptKinXZ2RBzkszbUVeJx//5is/YCoh8GdwAz+abub/lrM1yhhoSgZNUzPc/qZo6TeA1rPl51c4jaJgeB0u7ph4fnSaTqe71X4Tn
            // rfbcLNf7XbT6SnyB8zqhRdeeOGF/xX+Ax+K6aUe6o8AAAAAAElFTkSuQmCC" 
            alt="" />
            </Link>

                ):(
                <ul className='topList'>
                    <li className='topListItem'>
                    <Link className='link' to="/login">LOGIN</Link>
                    </li>
                    <li className='topListItem'>
                    <Link className='link' to="/register">REGISTER</Link>
                    </li>
                </ul>
                )
            }
            
            <i className="topSearchIcon fas fa-search"></i>

        </div>
        </div>
  )
}

