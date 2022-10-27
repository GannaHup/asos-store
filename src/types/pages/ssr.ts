export interface ServerSidePropsContext {
  params: any;
  query: any;
  req: any;
  res: any;
}

export interface PageProps<Props> {
  props: Props;
}

export interface BasePageProps {
  pageTitle?: string;
}
