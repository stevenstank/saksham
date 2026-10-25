interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
}

// A CSS animation rather than framer-motion: the server-rendered HTML then
// shows the content as soon as the stylesheet loads, instead of sitting at
// opacity 0 until hydration. Reduced motion is handled in globals.css.
export function FadeIn({ children, delay = 0 }: FadeInProps) {
  return (
    <div className="fade-in" style={delay ? { animationDelay: `${delay}s` } : undefined}>
      {children}
    </div>
  );
}
