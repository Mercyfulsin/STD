import { DiGithubAlt } from "react-icons/di";

const Footer = () => {
    return(
        <footer className="flex inset-x-0 bottom-0 items-center justify-center w-full h-12 border-t text-gray-800 dark:text-white whitespace-normal">
        Powered by <DiGithubAlt size="25" />
        <a
          className="flex items-center justify-center "
          href="https://github.com/mercyfulsin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mercyfulsin
        </a>
      </footer>
    )
}

export default Footer;