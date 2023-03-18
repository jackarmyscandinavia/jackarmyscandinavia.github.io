import markdownStyles from 'src/styles/components/markdown-styles.module.scss';

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div
      className={markdownStyles.markdown}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostBody;
