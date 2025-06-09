import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css'
import Link from '@mui/material/Link';
function Footer() {
    return (
        <footer className='rm-footer'>
            <div className="icons">
                <Link href='https://www.linkedin.com/in/kubra-yavuz/'>
                    <LinkedInIcon />
                </Link>
                <Link href='https://github.com/kubra-yavuz'>
                    <GitHubIcon />
                </Link>
            </div>

        </footer>



    )
}

export default Footer
