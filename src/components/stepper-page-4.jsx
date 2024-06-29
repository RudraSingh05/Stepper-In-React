import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function Demo4() {
  return (
    <>
    
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Page 4</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, ad qui quod obcaecati neque, atque quae fugiat ratione amet saepe enim, veniam cumque.
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Lorem, ipsum.
      </Button>
    </Card>
    </>
  );
}

export default Demo4;