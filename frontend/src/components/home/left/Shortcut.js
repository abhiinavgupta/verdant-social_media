export default function Shortcut({ link, img, name }) {
    return (
      <a href={link} target="_blank" rel="noreferrer" className="shortcut_item">
          <img src="instalogo.svg" alt="" />
          <span>{name}</span>
      </a>
    )
  }