import prismLogo from '../../assets/prismlogo.png'

export default function BrandLogo({ large = false, className = '' }) {
  return (
    <img
      src={prismLogo}
      alt="Prism Infotech logo"
      className={`object-contain transition-transform duration-300 ${
        large ? 'w-14 h-14' : 'w-9 h-9'
      } ${className}`}
    />
  )
}
