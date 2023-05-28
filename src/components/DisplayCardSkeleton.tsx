import { Card, Skeleton, SkeletonText } from '@chakra-ui/react';

const DisplayCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height={'100%'}>
        <SkeletonText></SkeletonText>
      </Skeleton>
    </Card>
  );
};

export default DisplayCardSkeleton;
