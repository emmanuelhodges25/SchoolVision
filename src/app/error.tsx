"use client";
import { useEffect } from "react";
export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) { useEffect(() => { console.error(error); }, [error]); return <main className="error-page"><span className="eyebrow">Something went wrong</span><h1>This page could not load.</h1><p>Please try again. This preview is not connected to a live data service.</p><button className="button" onClick={reset}>Try again</button></main>; }
