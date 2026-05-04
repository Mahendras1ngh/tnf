export default function TestPage() {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: 'var(--bg)', color: 'var(--ink)' }}>
      <h1 className="text-4xl font-display mb-4">CSS Test Page</h1>

      <div className="space-y-4">
        <div className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
          <h2 className="text-2xl mb-2">Surface Card</h2>
          <p className="text-[var(--ink-mute)]">This should have surface background with border</p>
        </div>

        <div className="p-4" style={{ backgroundColor: 'var(--gold)', color: 'var(--bg)' }}>
          <h2 className="text-2xl mb-2">Gold Background</h2>
          <p>This should have gold background with dark text</p>
        </div>

        <button className="btn-gold">
          Test Button
        </button>

        <div className="space-y-2">
          <p>CSS Variables Test:</p>
          <p>--bg: <span style={{ backgroundColor: 'var(--bg)', border: '1px solid white', padding: '2px 8px' }}>test</span></p>
          <p>--gold: <span style={{ backgroundColor: 'var(--gold)', padding: '2px 8px' }}>test</span></p>
          <p>--surface: <span style={{ backgroundColor: 'var(--surface)', border: '1px solid white', padding: '2px 8px' }}>test</span></p>
        </div>
      </div>
    </div>
  );
}
