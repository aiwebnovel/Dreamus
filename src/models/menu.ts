export interface SubItem {
  title: string
  link: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  description?: string
}

export interface MenuItem {
  title: string
  link?: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  description?: string
  subItems?: SubItem[]
}
