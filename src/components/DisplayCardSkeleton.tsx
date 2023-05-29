import { Card, Skeleton, SkeletonText } from '@chakra-ui/react';

interface Props {
  height: string;
}

const DisplayCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height={'300px'}>
        <SkeletonText></SkeletonText>
      </Skeleton>
    </Card>
  );
};

export default DisplayCardSkeleton;
