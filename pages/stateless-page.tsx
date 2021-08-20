import MainLayout from '@layouts/main'

export default function StatelessPage() {
  return (
    <div className="description">
      <p>This is a proof-of-concept (PoC).</p>
      <p>
        The app is intentionally over-engineered to exemplify how to omit state
        from different pages in a Next.js application
      </p>
    </div>
  )
}
