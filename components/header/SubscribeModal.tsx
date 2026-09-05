'use client'

import { useState } from 'react'
import { X, Check, Sparkles } from 'lucide-react'

interface SubscribeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SubscribeModal({ isOpen, onClose }: SubscribeModalProps) {
  const [email, setEmail] = useState('')
  const [tier, setTier] = useState<'digital' | 'all-access'>('digital')
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
      onClose()
    }, 2500)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-4">
      <div className="relative w-full max-w-lg bg-[#0E0E10] text-white border border-[#2A2A2E] shadow-2xl p-5 sm:p-8 animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 text-[#C5A059] text-xs font-semibold tracking-widest uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Executive Membership
          </div>
          <h3 className="font-serif text-2xl md:text-3xl text-white font-normal">
            Subscribe to The Spotlight Leaders
          </h3>
          <p className="text-neutral-400 text-xs md:text-sm mt-2 font-sans">
            Gain unlimited access to investigative features, monthly digital editions, and exclusive industry reports.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#1A1A1E] border border-[#C5A059]/40 p-6 text-center space-y-2">
            <Check className="w-8 h-8 text-[#C5A059] mx-auto" />
            <h4 className="font-serif text-lg text-white">Welcome to The Spotlight Leaders</h4>
            <p className="text-xs text-neutral-400">
              Confirmation and your digital reader link have been sent to {email}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setTier('digital')}
                className={`p-3 text-left border transition-all ${
                  tier === 'digital'
                    ? 'border-[#C5A059] bg-[#1A1A1E]'
                    : 'border-[#2A2A2E] bg-black/40 hover:border-neutral-600'
                }`}
              >
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-300">Digital Access</div>
                <div className="text-lg font-serif text-[#C5A059] mt-0.5">$9 <span className="text-xs text-neutral-400 font-sans">/mo</span></div>
                <div className="text-[11px] text-neutral-400 mt-1">Unlimited articles + App</div>
              </button>

              <button
                type="button"
                onClick={() => setTier('all-access')}
                className={`p-3 text-left border transition-all ${
                  tier === 'all-access'
                    ? 'border-[#C5A059] bg-[#1A1A1E]'
                    : 'border-[#2A2A2E] bg-black/40 hover:border-neutral-600'
                }`}
              >
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-300">All-Access Print</div>
                <div className="text-lg font-serif text-[#C5A059] mt-0.5">$24 <span className="text-xs text-neutral-400 font-sans">/mo</span></div>
                <div className="text-[11px] text-neutral-400 mt-1">Print edition + Digital</div>
              </button>
            </div>

            <div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your corporate or personal email"
                className="w-full bg-[#18181C] border border-[#2E2E34] px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-[#C5A059] transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#A67C52] hover:bg-[#8E6740] text-white py-3 text-xs uppercase tracking-widest font-semibold transition-colors shadow-md"
            >
              Activate Subscription
            </button>

            <p className="text-[10px] text-center text-neutral-500">
              Cancel anytime. Taxes may apply. By subscribing you agree to our Terms of Use.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
