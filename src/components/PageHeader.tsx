export function PageHeader({ command, title, subtitle }: { command: string; title: string; subtitle?: string }) {
  return (
    <div className="animate-float-up">
      <p className="font-mono text-sm text-primary">
        <span className="text-muted-foreground">$</span> {command}
        <span className="cursor-blink ml-1">_</span>
      </p>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
        {title}
      </h1>
      {subtitle && <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
