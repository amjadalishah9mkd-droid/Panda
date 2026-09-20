export default function HeroVisual() {
  return (
    <div
      className="hero-visual"
      role="img"
      aria-label="An abstract layered graphite form with a precise copper axis"
      data-scene-mount="hero"
    >
      <div className="hero-visual__frame" aria-hidden="true">
        <span className="hero-visual__corner hero-visual__corner--top-left" />
        <span className="hero-visual__corner hero-visual__corner--top-right" />
        <span className="hero-visual__corner hero-visual__corner--bottom-left" />
        <span className="hero-visual__corner hero-visual__corner--bottom-right" />
      </div>

      <div className="hero-visual__coordinates type-metadata" aria-hidden="true">
        <span>X 43.218</span>
        <span>Y 07.940</span>
      </div>

      <div className="hero-visual__stage" aria-hidden="true">
        <div className="hero-visual__orbit hero-visual__orbit--outer" />
        <div className="hero-visual__orbit hero-visual__orbit--inner" />
        <div className="hero-visual__axis" />
        <div className="hero-visual__object">
          <div className="hero-visual__slab hero-visual__slab--back" />
          <div className="hero-visual__slab hero-visual__slab--middle" />
          <div className="hero-visual__slab hero-visual__slab--front">
            <span />
          </div>
          <div className="hero-visual__core" />
        </div>
      </div>

      <div className="hero-visual__legend type-metadata" aria-hidden="true">
        <span>Material study / 001</span>
        <span>Interactive surface</span>
      </div>
    </div>
  );
}
