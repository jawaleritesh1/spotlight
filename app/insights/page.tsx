import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import InsightsPageContent from '@/components/insights/InsightsPageContent'

export const metadata = {
  title: 'Insights | The Success World',
  description:
    'Expert perspectives, in-depth analysis and thought-provoking ideas to help you navigate a changing world.',
}

export default function InsightsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />
      <main className="flex-1">
        <InsightsPageContent />
      </main>
      <Footer />
    </div>
  )
}
