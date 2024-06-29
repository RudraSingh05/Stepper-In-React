import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function Demo3() {
  return (<>
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Page 3</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae hic consectetur sed fugiat officia doloribus.
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        lorem
      </Button>
    </Card>
    </>
  );
}

export default Demo3;