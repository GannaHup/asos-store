export interface ServerSidePropsContext {
  params: any;
  query: any;
  req: any;
  res: any;
}

export interface RedirectPageProps {
  destination: string
  permanent: boolean
}

export interface PageProps<Props> {
  props?: Props;
  redirect?: RedirectPageProps
}

export interface BasePageProps {
  pageTitle?: string;
}
