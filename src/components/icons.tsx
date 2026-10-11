import type { Icon as PhosphorIcon, IconWeight } from "@phosphor-icons/react";
import {
  ArrowRightIcon,
  ArrowsClockwiseIcon,
  ArrowUpRightIcon,
  BankIcon,
  BasketIcon,
  BuildingOfficeIcon,
  CalendarDotsIcon,
  CaretDownIcon,
  ChartBarIcon,
  ChartLineUpIcon,
  CheckIcon,
  CloudArrowUpIcon,
  CloudIcon,
  CoinsIcon,
  CompassIcon,
  DatabaseIcon,
  EnvelopeSimpleIcon,
  FactoryIcon,
  FileTextIcon,
  GlobeSimpleIcon,
  GearSixIcon,
  HandshakeIcon,
  InvoiceIcon,
  KanbanIcon,
  LifebuoyIcon,
  LightningIcon,
  ListIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  MinusIcon,
  MoonIcon,
  PackageIcon,
  PencilRulerIcon,
  PhoneIcon,
  PlugsConnectedIcon,
  PlusIcon,
  PuzzlePieceIcon,
  QuestionIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ShoppingCartSimpleIcon,
  SparkleIcon,
  SquaresFourIcon,
  StackIcon,
  StackPlusIcon,
  StorefrontIcon,
  SunIcon,
  TranslateIcon,
  TrendUpIcon,
  TruckIcon,
  UsersThreeIcon,
  WarehouseIcon,
  WrenchIcon,
  XIcon,
} from "@phosphor-icons/react/ssr";

/**
 * Semantic icon names used across the site, mapped to Phosphor Icons (MIT).
 * Microsoft product names are shown as text, never as redrawn logos.
 */
const icons = {
  // Services
  advisory: CompassIcon,
  implementation: StackPlusIcon,
  migration: CloudArrowUpIcon,
  integration: PlugsConnectedIcon,
  support: LifebuoyIcon,
  management: ShieldCheckIcon,
  consulting: UsersThreeIcon,
  // Order-to-report flow
  order: ShoppingCartSimpleIcon,
  core: StackIcon,
  warehouse: WarehouseIcon,
  invoice: InvoiceIcon,
  bank: BankIcon,
  report: ChartBarIcon,
  // Business Central capability areas and integrations
  finance: CoinsIcon,
  sales: HandshakeIcon,
  purchasing: BasketIcon,
  inventory: PackageIcon,
  projects: KanbanIcon,
  manufacturing: FactoryIcon,
  service: WrenchIcon,
  ecommerce: StorefrontIcon,
  logistics: TruckIcon,
  automation: LightningIcon,
  copilot: SparkleIcon,
  cloud: CloudIcon,
  data: DatabaseIcon,
  insight: ChartLineUpIcon,
  yourSystems: PuzzlePieceIcon,
  company: BuildingOfficeIcon,
  settings: GearSixIcon,
  document: FileTextIcon,
  // Business Central guide
  modules: SquaresFourIcon,
  translate: TranslateIcon,
  updates: ArrowsClockwiseIcon,
  question: QuestionIcon,
  // Process
  understand: MagnifyingGlassIcon,
  design: PencilRulerIcon,
  deliver: RocketLaunchIcon,
  improve: TrendUpIcon,
  // Contact
  mail: EnvelopeSimpleIcon,
  phone: PhoneIcon,
  calendar: CalendarDotsIcon,
  location: MapPinIcon,
  // Interface
  arrowRight: ArrowRightIcon,
  arrowUpRight: ArrowUpRightIcon,
  chevronDown: CaretDownIcon,
  menu: ListIcon,
  close: XIcon,
  check: CheckIcon,
  plus: PlusIcon,
  minus: MinusIcon,
  sun: SunIcon,
  moon: MoonIcon,
  globe: GlobeSimpleIcon,
} satisfies Record<string, PhosphorIcon>;

export type IconName = keyof typeof icons;

/**
 * Decorative icon. Content icons (24 px and up) default to the light weight,
 * interface icons to regular, which keeps the line weight even across sizes.
 */
export function Icon({
  name,
  size = 20,
  weight,
  className,
}: {
  name: IconName;
  size?: number;
  weight?: IconWeight;
  className?: string;
}) {
  const Component = icons[name];
  return (
    <Component
      size={size}
      weight={weight ?? (size >= 24 ? "light" : "regular")}
      className={className}
      aria-hidden="true"
      focusable="false"
    />
  );
}
