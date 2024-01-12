export interface navigationProps {
  href: string;
  route: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

export interface slideProps {
  url: string;

  caption1: string;
  caption2: string;
  caption3: string;
  caption4: string;
  caption5: string;
  button: string;
  href: string;
}
export interface navigationProps {
  href: string;
  route: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

export interface slideProps {
  url: string;

  caption1: string;
  caption2: string;
  caption3: string;
  caption4: string;
  caption5: string;
  button: string;
  href: string;
}

export interface AnalyticsDataProps {
  value: number;
  label: string;
}

export interface beneficiaryProps {
  image: string;
  category: string;
  name: string;
  message: string;
  position: string;
}

export interface supportedProps {
  main: string;
  sub: string;
}

export interface whyProps {
  title: string;
  description: string;
  path1: string;
  path2: string;
  path3: string;
}

export interface missionProps {
  title: string;
  description: string;
  path1: string;
  path2: string;
  path3: string;
  cx: string;
  cy: string;
  radius: string;
}

export interface memberProps {
  image: string;
  name: string;
  position: string;
  url: string;
}

export interface InitiativesProps {
  title: string;
  description: string;
  image: string;
  route: string;
}

export interface InitProps {
  image: string;
  title: string;
  desctiption: string;
}

export interface donateProps {
  id: number;
  title: string;
  description: string;
  details: string;
}
