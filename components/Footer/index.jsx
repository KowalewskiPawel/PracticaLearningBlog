import StyledFooter from "./StyledFooter";
import StyledIcon from "./StyledIcon";

const Footer = () => {
  return (
    <StyledFooter>
      <a href='mailto:pawelkowalewsk@gmail.com'>pawelkowalewsk@gmail.com</a>
      <ul>
        <li>
          <a
            href='https://github.com/KowalewskiPawel'
            rel='noreferrer'
            target='_blank'>
            <StyledIcon className='fab fa-github' />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/kowalewskipawel/'
            rel='noreferrer'
            target='_blank'>
            <StyledIcon className='fab fa-linkedin' />
          </a>
        </li>
        <li>
          <a
            href='https://play.google.com/store/apps/developer?id=Practical+Learning'
            rel='noreferrer'
            target='_blank'>
            <StyledIcon className='fab fa-google-play' />
          </a>
        </li>
        <li>
          <a href='https://dev.to/pawel' rel='noreferrer' target='_blank'>
            <StyledIcon className='fab fa-dev' />
          </a>
        </li>
      </ul>
    </StyledFooter>
  );
};

export default Footer;
