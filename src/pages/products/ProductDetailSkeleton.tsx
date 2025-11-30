export default function ProductDetailsSkeleton() {
  return (
    <div className="container py-5">
      <div className="row g-5">

        {/* LEFT SIDE SKELETON */}
        <div className="col-md-6">
          <div className="skeleton skeleton-main mb-4"></div>

          <div className="d-flex gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="skeleton skeleton-thumb"></div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE SKELETON */}
        <div className="col-md-6">
          <div className="skeleton skeleton-tag mb-3"></div>
          <div className="skeleton skeleton-title mb-3"></div>
          <div className="skeleton skeleton-rating mb-4"></div>
          <div className="skeleton skeleton-price mb-4"></div>

          <div className="d-flex gap-3 mb-4">
            <div className="skeleton skeleton-btn"></div>
            <div className="skeleton skeleton-btn"></div>
          </div>
        </div>
      </div>

      {/* DESCRIPTION BOX */}
      <div className="skeleton skeleton-box mt-5"></div>

      {/* RELATED PRODUCTS */}
      <div className="row g-4 mt-5">
        {[1, 2, 3, 4].map((i) => (
          <div className="col-6 col-md-3" key={i}>
            <div className="skeleton skeleton-related"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
