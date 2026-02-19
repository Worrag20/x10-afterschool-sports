import Image from "next/image";
import Link from "next/link";

function Section({
  title,
  children,
  id,
}: {
  title?: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        {title ? <h2 className="text-2xl font-semibold tracking-tight">{title}</h2> : null}
        <div className={title ? "mt-6" : ""}>{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-white" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs text-zinc-700">
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
                X10 After-School Sports
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                After-School Lacrosse <span className="text-emerald-700">Made Easy</span>
              </h1>

              <p className="mt-4 text-lg text-zinc-700">
                X10 brings fast-paced, confidence-building lacrosse to your school—organized,
                beginner-friendly, and fun from day one.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Request X10 at Your School
                </Link>
                <Link
                  href="#how"
                  className="rounded-xl border bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                >
                  Learn How It Works
                </Link>
              </div>

              <p className="mt-3 text-xs text-zinc-600">
                Questions? Email{" "}
                <a className="underline" href="mailto:matt.garrow@x10afterschoolsports.com">
                  matt.garrow@x10afterschoolsports.com
                </a>
              </p>
            </div>

            {/* Right card */}
            <div className="rounded-3xl border bg-white p-8 shadow-sm">
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  "Beginner-friendly",
                  "High-energy sessions",
                  "Coaching-first culture",
                  "Lots of touches & reps",
                ].map((t) => (
                  <div key={t} className="rounded-2xl border bg-white px-4 py-3 text-sm">
                    {t}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border bg-emerald-50 p-4 text-sm text-zinc-700">
                Movement • Teamwork • Confidence • Fun
              </div>

              <div className="mt-6 rounded-2xl border overflow-hidden">
                <Image
                  src="/x10-hero.webp"
                  alt="X10 after-school lacrosse"
                  width={1400}
                  height={900}
                  className="h-56 w-full object-cover"
                />
              </div>

              <p className="mt-2 text-xs text-zinc-500">
                (We’ll add your photos next — this will show once we upload them.)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <Section id="how" title="How it works">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              n: "01",
              h: "We coordinate with your school",
              p: "Schedule, space, pickup process, and simple communication for families.",
            },
            {
              n: "02",
              h: "Kids learn + play",
              p: "Stations + skill games + small-sided competition with tons of action.",
            },
            {
              n: "03",
              h: "Everyone wins",
              p: "Active afternoons, confident kids, and a program schools can trust.",
            },
          ].map((x) => (
            <div key={x.n} className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold text-emerald-700">{x.n}</div>
              <div className="mt-2 text-lg font-semibold">{x.h}</div>
              <div className="mt-2 text-sm text-zinc-600">{x.p}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* WHAT A SESSION LOOKS LIKE */}
      <Section title="What a session looks like">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border p-6">
            <ul className="space-y-3 text-sm text-zinc-700">
              <li>• Quick warmup + movement games</li>
              <li>• Stick skills in stations (passing, catching, shooting)</li>
              <li>• Small-sided games (lots of touches, lots of fun)</li>
              <li>• Wrap-up + “win of the day” confidence moment</li>
            </ul>
          </div>
          <div className="rounded-3xl border bg-emerald-50 p-6">
            <div className="text-sm text-zinc-700">
              We keep groups active and engaged—less standing, more playing. Sessions are age-appropriate
              and designed to help kids improve fast while having a great time.
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="border-t bg-zinc-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl border bg-white p-10">
            <h2 className="text-3xl font-semibold tracking-tight">Bring X10 to your school.</h2>
            <p className="mt-3 max-w-2xl text-zinc-700">
              Request availability and we’ll send details on schedule, format, and next steps.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white hover:bg-emerald-700"
              >
                Request X10 at Your School
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
