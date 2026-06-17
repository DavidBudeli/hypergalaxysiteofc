import { colors } from "./colors";

export type PlanetKind =
  | "nova"
  | "hyper-agents"
  | "hyper-cloud"
  | "hyper-flow"
  | "hyper-dev"
  | "hyper-support"
  | "hyper-connect";

export type PlanetConfig = {
  id: PlanetKind;
  name: string;
  label: string;
  visualType: string;
  category: string;
  description: string;
  asset: {
    src: string;
    mobileSrc: string;
    thumbSrc: string;
    status: "approved" | "pending-final-asset";
    minimumSize: "1024x1024";
  };
  position: {
    desktop: { x: string; y: string };
    mobile: { x: string; y: string };
  };
  size: {
    desktop: number;
    mobile: number;
  };
  depth: number;
  float: {
    duration: number;
    amplitude: number;
    direction: "x" | "y" | "diagonal";
    delay: number;
  };
  surfaceSpeed: number;
  rotationSpeed: number;
  accentColor: string;
  atmosphereColor: string;
};

export const planetsConfig: PlanetConfig[] = [
  {
    id: "nova",
    name: "Nova",
    label: "01",
    visualType: "energy planet",
    category: "AI assistant core",
    description: "Campo energetico magenta e violeta com pontos luminosos para representar inteligencia artificial.",
    asset: {
      src: "/assets/planets/nova.webp",
      mobileSrc: "/assets/planets/nova-mobile.webp",
      thumbSrc: "/assets/planets/nova-thumb.webp",
      status: "approved",
      minimumSize: "1024x1024",
    },
    position: {
      desktop: { x: "76%", y: "19%" },
      mobile: { x: "52%", y: "32%" },
    },
    size: { desktop: 168, mobile: 116 },
    depth: 5,
    float: { duration: 7.8, amplitude: 9, direction: "diagonal", delay: 0 },
    surfaceSpeed: 0.18,
    rotationSpeed: 0.08,
    accentColor: colors.magenta,
    atmosphereColor: colors.lavender,
  },
  {
    id: "hyper-agents",
    name: "Hyper Agents",
    label: "02",
    visualType: "oceanic planet",
    category: "AI agents",
    description: "Planeta azul com redes e regioes luminosas para sugerir atividade autonoma.",
    asset: {
      src: "/assets/planets/hyper-agents.webp",
      mobileSrc: "/assets/planets/hyper-agents-mobile.webp",
      thumbSrc: "/assets/planets/hyper-agents-thumb.webp",
      status: "approved",
      minimumSize: "1024x1024",
    },
    position: {
      desktop: { x: "62%", y: "31%" },
      mobile: { x: "72%", y: "48%" },
    },
    size: { desktop: 142, mobile: 104 },
    depth: 4,
    float: { duration: 8.6, amplitude: 12, direction: "y", delay: 0.16 },
    surfaceSpeed: 0.12,
    rotationSpeed: 0.06,
    accentColor: colors.electricBlue,
    atmosphereColor: colors.iceBlue,
  },
  {
    id: "hyper-cloud",
    name: "Hyper Cloud",
    label: "03",
    visualType: "cloud planet",
    category: "Cloud infrastructure",
    description: "Turquesa com camadas volumetricas de nuvens e atmosfera evidente.",
    asset: {
      src: "/assets/planets/hyper-cloud.webp",
      mobileSrc: "/assets/planets/hyper-cloud-mobile.webp",
      thumbSrc: "/assets/planets/hyper-cloud-thumb.webp",
      status: "approved",
      minimumSize: "1024x1024",
    },
    position: {
      desktop: { x: "84%", y: "48%" },
      mobile: { x: "44%", y: "62%" },
    },
    size: { desktop: 196, mobile: 132 },
    depth: 6,
    float: { duration: 9.4, amplitude: 10, direction: "x", delay: 0.32 },
    surfaceSpeed: 0.1,
    rotationSpeed: 0.05,
    accentColor: colors.teal,
    atmosphereColor: colors.iceBlue,
  },
  {
    id: "hyper-flow",
    name: "Hyper Flow",
    label: "04",
    visualType: "ringed gas planet",
    category: "Automation flow",
    description: "Planeta principal com aneis, faixas organicas e nucleo visual quente.",
    asset: {
      src: "/assets/planets/hyper-flow.webp",
      mobileSrc: "/assets/planets/hyper-flow-mobile.webp",
      thumbSrc: "/assets/planets/hyper-flow-thumb.webp",
      status: "approved",
      minimumSize: "1024x1024",
    },
    position: {
      desktop: { x: "57%", y: "64%" },
      mobile: { x: "20%", y: "54%" },
    },
    size: { desktop: 154, mobile: 108 },
    depth: 3,
    float: { duration: 10.2, amplitude: 8, direction: "diagonal", delay: 0.48 },
    surfaceSpeed: 0.08,
    rotationSpeed: 0.04,
    accentColor: colors.orange,
    atmosphereColor: colors.warning,
  },
  {
    id: "hyper-dev",
    name: "Hyper Dev",
    label: "05",
    visualType: "rocky planet",
    category: "Software engineering",
    description: "Lavanda e rosa com relevo rochoso, crateras e placas geometricas sutis.",
    asset: {
      src: "/assets/planets/hyper-dev.webp",
      mobileSrc: "/assets/planets/hyper-dev-mobile.webp",
      thumbSrc: "/assets/planets/hyper-dev-thumb.webp",
      status: "approved",
      minimumSize: "1024x1024",
    },
    position: {
      desktop: { x: "69%", y: "76%" },
      mobile: { x: "78%", y: "70%" },
    },
    size: { desktop: 118, mobile: 92 },
    depth: 2,
    float: { duration: 7.2, amplitude: 7, direction: "y", delay: 0.64 },
    surfaceSpeed: 0.15,
    rotationSpeed: 0.07,
    accentColor: colors.lavender,
    atmosphereColor: colors.electricPurple,
  },
  {
    id: "hyper-support",
    name: "Hyper Support",
    label: "06",
    visualType: "planet with moon",
    category: "Support operations",
    description: "Azul profundo com superficie estavel, orbita curta e lua propria.",
    asset: {
      src: "/assets/planets/hyper-support.webp",
      mobileSrc: "/assets/planets/hyper-support-mobile.webp",
      thumbSrc: "/assets/planets/hyper-support-thumb.webp",
      status: "approved",
      minimumSize: "1024x1024",
    },
    position: {
      desktop: { x: "89%", y: "27%" },
      mobile: { x: "28%", y: "38%" },
    },
    size: { desktop: 92, mobile: 78 },
    depth: 1,
    float: { duration: 11.4, amplitude: 6, direction: "x", delay: 0.8 },
    surfaceSpeed: 0.09,
    rotationSpeed: 0.035,
    accentColor: colors.iceBlue,
    atmosphereColor: colors.electricBlue,
  },
  {
    id: "hyper-connect",
    name: "Hyper Connect",
    label: "07",
    visualType: "deep blue gas planet",
    category: "APIs and integrations",
    description: "Verde azulado com rotas discretas, pontos e satelite para conexoes.",
    asset: {
      src: "/assets/planets/hyper-connect.webp",
      mobileSrc: "/assets/planets/hyper-connect-mobile.webp",
      thumbSrc: "/assets/planets/hyper-connect-thumb.webp",
      status: "approved",
      minimumSize: "1024x1024",
    },
    position: {
      desktop: { x: "74%", y: "58%" },
      mobile: { x: "58%", y: "76%" },
    },
    size: { desktop: 72, mobile: 62 },
    depth: 0,
    float: { duration: 12.6, amplitude: 5, direction: "diagonal", delay: 0.96 },
    surfaceSpeed: 0.07,
    rotationSpeed: 0.03,
    accentColor: colors.hyperPurple,
    atmosphereColor: colors.teal,
  },
];
