"use client"

import { useState, useEffect } from "react"

export function DevMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [password, setPassword] = useState("")
  const [settings, setSettings] = useState({
    button3d: true,
    animations: true,
    glowIntensity: 1,
    themeOpacity: 1,
    showCards: true,
  })

  // Load settings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("devMenuSettings")
    if (saved) {
      setSettings(JSON.parse(saved))
    }
    setIsUnlocked(localStorage.getItem("devMenuUnlocked") === "true")
  }, [])

  // Save settings to localStorage and apply them
  useEffect(() => {
    localStorage.setItem("devMenuSettings", JSON.stringify(settings))
    applySettings()
  }, [settings])

  const applySettings = () => {
    // Toggle 3D effects
    if (settings.button3d) {
      document.documentElement.style.setProperty("--button-3d-enabled", "1")
    } else {
      document.documentElement.style.setProperty("--button-3d-enabled", "0")
    }

    // Toggle animations
    if (!settings.animations) {
      document.body.style.animationDuration = "0s !important"
      document.body.style.transitionDuration = "0s !important"
    } else {
      document.body.style.animationDuration = ""
      document.body.style.transitionDuration = ""
    }

    // Glow intensity
    document.documentElement.style.setProperty(
      "--glow-intensity",
      settings.glowIntensity.toString()
    )

    // Theme opacity
    document.documentElement.style.setProperty(
      "--theme-opacity",
      settings.themeOpacity.toString()
    )
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "7s-") {
      setIsUnlocked(true)
      localStorage.setItem("devMenuUnlocked", "true")
      setPassword("")
    } else {
      alert("❌ Wrong password!")
      setPassword("")
    }
  }

  const handleReset = () => {
    setSettings({
      button3d: true,
      animations: true,
      glowIntensity: 1,
      themeOpacity: 1,
      showCards: true,
    })
    localStorage.removeItem("devMenuSettings")
    setIsUnlocked(false)
    localStorage.removeItem("devMenuUnlocked")
    setIsOpen(false)
  }

  // Q key listener
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "q" || e.key === "Q") {
        setIsOpen(!isOpen)
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [isOpen])

  return (
    <>
      {/* Dev Menu Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-red-600/80 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all"
          title="Press Q to toggle - Dev Menu"
        >
          🔧 DEV
        </button>
      </div>

      {/* Dev Menu Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-zinc-900 border-2 border-red-600 rounded-xl p-6 w-96 max-h-96 overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-red-500">🔓 DEV MENU</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ✕
              </button>
            </div>

            {!isUnlocked ? (
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <p className="text-gray-300 text-sm">🔐 Enter password to unlock</p>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password..."
                  className="w-full px-3 py-2 bg-zinc-800 border border-red-500 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  autoFocus
                />
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-bold transition"
                >
                  Unlock
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                <p className="text-green-400 text-sm">✅ Unlocked - Controls Active</p>

                {/* 3D Effects Toggle */}
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.button3d}
                      onChange={(e) =>
                        setSettings({ ...settings, button3d: e.target.checked })
                      }
                      className="w-4 h-4"
                    />
                    <span>3D Button Effects</span>
                  </label>
                </div>

                {/* Animations Toggle */}
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.animations}
                      onChange={(e) =>
                        setSettings({ ...settings, animations: e.target.checked })
                      }
                      className="w-4 h-4"
                    />
                    <span>Animations</span>
                  </label>
                </div>

                {/* Glow Intensity */}
                <div className="space-y-2">
                  <label className="text-white text-sm">
                    ✨ Glow Intensity: {(settings.glowIntensity * 100).toFixed(0)}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="2"
                    step="0.1"
                    value={settings.glowIntensity}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        glowIntensity: parseFloat(e.target.value),
                      })
                    }
                    className="w-full"
                  />
                </div>

                {/* Theme Opacity */}
                <div className="space-y-2">
                  <label className="text-white text-sm">
                    🌙 Theme Opacity: {(settings.themeOpacity * 100).toFixed(0)}%
                  </label>
                  <input
                    type="range"
                    min="0.3"
                    max="1"
                    step="0.1"
                    value={settings.themeOpacity}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        themeOpacity: parseFloat(e.target.value),
                      })
                    }
                    className="w-full"
                  />
                </div>

                {/* Show/Hide Cards */}
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.showCards}
                      onChange={(e) =>
                        setSettings({ ...settings, showCards: e.target.checked })
                      }
                      className="w-4 h-4"
                    />
                    <span>Show Cards</span>
                  </label>
                </div>

                {/* Reset Button */}
                <button
                  onClick={handleReset}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-bold transition mt-4"
                >
                  🔄 Reset All
                </button>

                <p className="text-gray-400 text-xs mt-4">
                  💡 Tip: Changes are saved for all users visiting this site
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Apply settings via CSS */}
      <style jsx global>{`
        :root {
          --button-3d-enabled: ${settings.button3d ? "1" : "0"};
          --glow-intensity: ${settings.glowIntensity};
          --theme-opacity: ${settings.themeOpacity};
        }

        ${
          !settings.button3d
            ? `
          .button-3d:hover {
            transform: none !important;
          }
          .button-3d:hover::before {
            opacity: 0 !important;
          }
        `
            : ""
        }

        ${
          !settings.showCards
            ? `
          .button-3d {
            opacity: 0.3;
            pointer-events: none;
          }
        `
            : ""
        }

        ${
          !settings.animations
            ? `
          * {
            animation-duration: 0s !important;
            transition-duration: 0s !important;
          }
        `
            : ""
        }

        body {
          opacity: ${settings.themeOpacity};
        }

        .button-3d:hover::before {
          box-shadow: 0 0 40px rgba(255, 255, 255, ${0.6 * settings.glowIntensity}) !important,
                      0 0 80px rgba(255, 255, 255, ${0.3 * settings.glowIntensity}) !important;
        }
      `}</style>
    </>
  )
}
