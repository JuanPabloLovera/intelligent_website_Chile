"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  BrainCircuit,
  Briefcase,
  ChevronRight,
  Cpu,
  Database,
  Gauge,
  Globe,
  Layers3,
  Mail,
  Phone,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";

type SectionCardProps = {
  children: React.ReactNode;
  className?: string;
};

type PillProps = {
  children: React.ReactNode;
  className?: string;
};

type FadeUpProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function SectionCard({ children, className }: SectionCardProps) {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
}

function Pill({ children, className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200",
        className
      )}
    >
      {children}
    </span>
  );
}

function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const highlights = [
  "Arquitectura de soluciones con IA aplicada",
  "Troubleshooting profundo en entornos críticos",
  "Continuidad operativa y estabilización de servicios",
  "Observabilidad, automatización y análisis técnico",
  "Perfil puente entre operación, negocio y tecnología",
];

const expertise = [
  {
    icon: BrainCircuit,
    title: "IA aplicada a problemas reales",
    text: "Uso práctico de IA para validación operativa, análisis técnico, apoyo a troubleshooting y estructuración de respuestas técnicas con foco en eficiencia y criterio operacional.",
  },
  {
    icon: Gauge,
    title: "Operación crítica y continuidad",
    text: "Experiencia en plataformas sensibles donde la estabilidad del servicio, la trazabilidad y la respuesta ante incidentes son parte del núcleo del negocio.",
  },
  {
    icon: Workflow,
    title: "Automatización con impacto",
    text: "Automatización de tareas y procesos técnicos para reducir fricción operativa, mejorar consistencia y acelerar ejecución en ambientes exigentes.",
  },
  {
    icon: ShieldCheck,
    title: "Resolución estructurada",
    text: "Perfil orientado a destrabar incidentes complejos mediante observabilidad, análisis de logs, SQL, Linux y coordinación técnica bajo presión.",
  },
];

const stack = [
  {
    title: "IA aplicada",
    icon: Sparkles,
    items: ["DeepSeek", "Prompting", "Validación operativa", "Análisis técnico asistido por IA"],
  },
  {
    title: "Observabilidad",
    icon: Gauge,
    items: ["Dynatrace", "Splunk", "Cacti"],
  },
  {
    title: "Sistemas",
    icon: Server,
    items: ["Linux", "Windows Server", "Active Directory"],
  },
  {
    title: "Datos",
    icon: Database,
    items: ["PostgreSQL / psql", "SQL Server", "Qlik", "Softland"],
  },
  {
    title: "Automatización",
    icon: Cpu,
    items: ["Bash", "Windows Shell", "Jenkins", "crontab", "VBA"],
  },
  {
    title: "Plataformas y gestión",
    icon: Layers3,
    items: ["SWIFT", "SAP S/4HANA", "ServiceNow", "Jira", "Confluence", "ITIL"],
  },
];

const experience = [
  {
    role: "Consultor Informático Independiente",
    company: "Trabajo independiente",
    period: "2025 — Actualidad",
    bullets: [
      "Diseño y ejecución de soluciones técnicas para soporte especializado e integración de sistemas.",
      "Automatización de tareas operativas para mejorar eficiencia, orden y consistencia.",
      "Uso de IA aplicada para análisis técnico, troubleshooting y validación operativa.",
    ],
  },
  {
    role: "Analista de Sistemas SWIFT",
    company: "Klap",
    period: "2023 — 2024",
    bullets: [
      "Soporte L3 en operación crítica de adquirencia y plataformas sensibles.",
      "Resolución de incidentes complejos con observabilidad, logs, psql y Linux.",
      "Ejecución y monitoreo de procesos críticos mediante Bash, Jenkins y crontab.",
      "Soporte sobre plataforma SWIFT e integraciones con Visa, Mastercard, Amex y UnionPay.",
      "Coordinación con soporte especializado y participación en procesos críticos de facturación.",
    ],
  },
  {
    role: "Incident Management",
    company: "Vector",
    period: "2021 — 2022",
    bullets: [
      "Coordinación de incidentes críticos bajo marco ITIL.",
      "Seguimiento postincidente y apoyo a mejora operativa.",
      "Uso de IA como apoyo para análisis técnico.",
    ],
  },
  {
    role: "Especialista en Backups",
    company: "Tivit",
    period: "2020 — 2021",
    bullets: [
      "Administración de respaldos y recuperación de información.",
      "Controles asociados a continuidad operacional y disponibilidad de datos.",
    ],
  },
  {
    role: "Analista SAP S/4HANA / Líder Técnico",
    company: "Colgram",
    period: "2018 — 2019",
    bullets: [
      "Soporte técnico y funcional sobre SAP S/4HANA y administración de roles.",
      "Configuraciones operativas, matriz de riesgo en Qlik y automatización con VBA.",
    ],
  },
  {
    role: "Administrador TI",
    company: "Electricidad Valo",
    period: "2013 — 2017",
    bullets: [
      "Administración de infraestructura tecnológica y participación en proyectos eléctricos.",
      "Configuración HMI en operación minera, documentación técnica y automatización con Softland.",
    ],
  },
];

const strengths = [
  "Desarrollador experto en soluciones técnicas con IA aplicada",
  "Especialista senior en soporte L3 y operación crítica",
  "Pensamiento estructurado para incidentes complejos",
  "Automatización con enfoque práctico y operacional",
  "Capacidad para traducir complejidad técnica en soluciones ejecutables",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute top-80 left-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <FadeUp>
          <SectionCard className="p-6 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Pill className="border-cyan-400/30 bg-cyan-400/10 text-cyan-200">
                    Perfil ejecutivo · CV web elite
                  </Pill>
                  <Pill>Humanizado · Premium · Estratégico</Pill>
                </div>

                <div className="space-y-3">
                  <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
                    Juan Pablo
                    <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
                      Lovera Romero
                    </span>
                  </h1>
                  <p className="max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                    Desarrollador Experto en Soluciones con IA Aplicada, orientado a
                    operaciones críticas, automatización, observabilidad y resolución de
                    problemas complejos. Un perfil construido desde la práctica, la
                    continuidad operativa y la capacidad de destrabar entornos donde la
                    estabilidad no es negociable.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-4 py-2">
                    <Phone className="h-4 w-4" />
                    <span>+56 9 6591 5413</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-4 py-2">
                    <Mail className="h-4 w-4" />
                    <span>jploveraromero@outlook.com</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-4 py-2">
                    <Globe className="h-4 w-4" />
                    <span>Chile</span>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {highlights.map((item, index) => (
                    <FadeUp key={item} delay={0.08 * index}>
                      <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
                        <BadgeCheck className="mt-0.5 h-5 w-5 text-cyan-300" />
                        <span className="text-sm leading-6 text-slate-200">{item}</span>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6 shadow-xl">
                <div className="mb-5 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-cyan-300" />
                  <h2 className="text-lg font-medium text-white">Posicionamiento</h2>
                </div>

                <div className="space-y-4 text-sm leading-7 text-slate-300">
                  <p>
                    Profesional senior que une soporte avanzado, automatización,
                    observabilidad e IA aplicada para convertir complejidad técnica en
                    soluciones sostenibles, ejecutables y alineadas con la operación.
                  </p>
                  <p>
                    Más que administrar tecnología, su foco está en entender sistemas
                    sensibles, detectar fricción real, ordenar el caos operativo y diseñar
                    respuestas con criterio técnico y visión de arquitectura.
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  {strengths.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                    >
                      <ChevronRight className="mt-0.5 h-4 w-4 text-cyan-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="mailto:jploveraromero@outlook.com"
                    className="inline-flex items-center rounded-2xl bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-white/90"
                  >
                    Disponible para proyectos
                  </a>
                  <span className="inline-flex items-center rounded-2xl border border-white/15 px-4 py-2 text-sm text-white">
                    Perfil orientado a valor
                  </span>
                </div>
              </div>
            </div>
          </SectionCard>
        </FadeUp>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeUp key={item.title} delay={0.08 * index}>
                <SectionCard className="h-full p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10">
                    <Icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="text-xl font-medium text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                </SectionCard>
              </FadeUp>
            );
          })}
        </section>

        <FadeUp delay={0.1} className="mt-8">
          <SectionCard className="p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <Wrench className="h-5 w-5 text-cyan-300" />
              <h2 className="text-2xl font-semibold text-white">Stack y ecosistema técnico</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {stack.map((group, index) => {
                const Icon = group.icon;
                return (
                  <FadeUp key={group.title} delay={0.06 * index}>
                    <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5">
                          <Icon className="h-5 w-5 text-cyan-300" />
                        </div>
                        <h3 className="text-base font-medium text-white">{group.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <Pill key={item}>{item}</Pill>
                        ))}
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </SectionCard>
        </FadeUp>

        <FadeUp delay={0.12} className="mt-8">
          <SectionCard className="p-6 md:p-8">
            <div className="mb-8 flex items-center gap-3">
              <Briefcase className="h-5 w-5 text-cyan-300" />
              <h2 className="text-2xl font-semibold text-white">Trayectoria profesional</h2>
            </div>

            <div className="space-y-5">
              {experience.map((job, index) => (
                <FadeUp key={`${job.role}-${job.company}`} delay={0.05 * index}>
                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-5 md:p-6">
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-xl font-medium text-white">{job.role}</h3>
                        <p className="text-sm text-cyan-200">{job.company}</p>
                      </div>
                      <Pill>{job.period}</Pill>
                    </div>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                      {job.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeUp>
              ))}
            </div>
          </SectionCard>
        </FadeUp>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeUp>
            <SectionCard className="h-full p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-white">Formación</h2>
              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-300">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-5">
                  <p className="text-base font-medium text-white">Técnico de Nivel Superior en Informática</p>
                  <p>IACC · 2020 — 2022</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-5">
                  <p className="text-base font-medium text-white">Ingeniería en Informática (incompleta)</p>
                  <p>Duoc UC · 2007 — 2009</p>
                </div>
              </div>
            </SectionCard>
          </FadeUp>

          <FadeUp delay={0.08}>
            <SectionCard className="h-full bg-gradient-to-br from-cyan-500/10 via-white/5 to-violet-500/10 p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-white">Resumen humano del perfil</h2>
              <div className="mt-5 space-y-4 text-sm leading-8 text-slate-200 md:text-[15px]">
                <p>
                  He construido mi carrera en espacios donde los sistemas no pueden
                  fallar con facilidad. Mi valor no está solo en conocer herramientas,
                  sino en leer el contexto, detectar la causa real del problema y
                  ordenar una salida viable cuando la operación se complica.
                </p>
                <p>
                  Mi trayectoria mezcla soporte avanzado, automatización, datos,
                  observabilidad y criterio operacional. Eso me permite moverme entre
                  lo técnico y lo estratégico, con foco en estabilidad, continuidad y
                  ejecución efectiva.
                </p>
                <p>
                  Hoy proyecto ese recorrido hacia un rol más alto: desarrollar,
                  articular y mejorar soluciones con IA aplicada que ayuden a resolver
                  problemas reales del negocio, la operación y la experiencia técnica.
                </p>
              </div>
            </SectionCard>
          </FadeUp>
        </section>
      </div>
    </main>
  );
}
