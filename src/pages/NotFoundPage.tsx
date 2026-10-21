import { GovButton, GovContainer } from '@gov-design-system-ce/react'
import Footer from '../components/layout/Footer/Footer'
import Header from '../components/layout/Header/Header'

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-canvas font-sans text-ink">
      <Header />
      <main className="py-16">
        <GovContainer className="max-w-layout-wide w-full px-4 lg:px-6">
          <h1 className="mb-4 text-4xl font-medium">Stránka nebyla nalezena</h1>
          <GovButton href="/" type="outlined" color="primary" size="m">
            Zpět na úvodní stránku
          </GovButton>
        </GovContainer>
      </main>
      <Footer />
    </div>
  )
}

export default NotFoundPage
