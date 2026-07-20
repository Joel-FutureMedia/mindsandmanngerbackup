import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from 'react'
import './DiscoveryCallModal.css'

interface DiscoveryCallContextValue {
  openDiscoveryCall: () => void
  closeDiscoveryCall: () => void
}

const DiscoveryCallContext = createContext<DiscoveryCallContextValue | null>(null)

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  industry: '',
  message: '',
}

export function DiscoveryCallProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [form, setForm] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)

  const openDiscoveryCall = useCallback(() => {
    setSubmitted(false)
    setIsOpen(true)
  }, [])

  const closeDiscoveryCall = useCallback(() => {
    setIsOpen(false)
    setSubmitted(false)
    setForm(emptyForm)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeDiscoveryCall()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, closeDiscoveryCall])

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.querySelector<HTMLElement>('input, textarea, select, button')?.focus()
    }
  }, [isOpen])

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <DiscoveryCallContext.Provider value={{ openDiscoveryCall, closeDiscoveryCall }}>
      {children}

      {isOpen ? (
        <div className="discovery-modal" role="presentation" onClick={closeDiscoveryCall}>
          <div
            ref={dialogRef}
            className="discovery-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="discovery-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="discovery-modal__close"
              onClick={closeDiscoveryCall}
              aria-label="Close form"
            >
              ×
            </button>

            {submitted ? (
              <div className="discovery-modal__success">
                <h2 id="discovery-modal-title" className="discovery-modal__title">
                  Thank you
                </h2>
                <p className="discovery-modal__intro">
                  We&apos;ve received your details and will be in touch shortly to schedule your discovery call.
                </p>
                <button
                  type="button"
                  className="btn-pill btn-pill--mustard discovery-modal__submit"
                  onClick={closeDiscoveryCall}
                >
                  <span className="CharOverride-4">Close</span>
                </button>
              </div>
            ) : (
              <>
                <h2 id="discovery-modal-title" className="discovery-modal__title">
                  Book a Discovery Call
                </h2>
                <p className="discovery-modal__intro">
                  Tell us a little about yourself and we&apos;ll reach out to find a time that works.
                </p>

                <form className="discovery-modal__form" onSubmit={handleSubmit}>
                  <div className="discovery-modal__field">
                    <label htmlFor="discovery-name">Full name</label>
                    <input
                      id="discovery-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="discovery-modal__row">
                    <div className="discovery-modal__field">
                      <label htmlFor="discovery-email">Email</label>
                      <input
                        id="discovery-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="discovery-modal__field">
                      <label htmlFor="discovery-phone">Phone</label>
                      <input
                        id="discovery-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="discovery-modal__row">
                    <div className="discovery-modal__field">
                      <label htmlFor="discovery-company">Company / organisation</label>
                      <input
                        id="discovery-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={form.company}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="discovery-modal__field">
                      <label htmlFor="discovery-industry">Industry</label>
                      <select
                        id="discovery-industry"
                        name="industry"
                        value={form.industry}
                        onChange={handleChange}
                      >
                        <option value="">Select one</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="service">Service industries</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="discovery-modal__field">
                    <label htmlFor="discovery-message">What would you like to discuss?</label>
                    <textarea
                      id="discovery-message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn-pill btn-pill--mustard discovery-modal__submit">
                    <span className="CharOverride-4">Send request</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      ) : null}
    </DiscoveryCallContext.Provider>
  )
}

export function useDiscoveryCall() {
  const context = useContext(DiscoveryCallContext)
  if (!context) {
    throw new Error('useDiscoveryCall must be used within DiscoveryCallProvider')
  }
  return context
}
