import Image from "../Header/profile-pic.png";

const Header = () => {
    return (
        <div>
            <figure>
                <img src={Image} alt="Cartoon profile."/>
                <figcaption>Monique Davies</figcaption>
                <figcaption>Front End Developer</figcaption>
                <figcaption>
                    <a href={"https://www.google.com/"}>moniquedavies.website</a>
                </figcaption>
            </figure>
            <ul>
                <li>
                    <i class="fas fa-envelope"></i>
                    Email
                </li>
                <li>
                    <i class="fab fa-linkedin"></i>
                    LinkedIn
                </li>
            </ul>
            
        </div>
    )
}


export default Header;