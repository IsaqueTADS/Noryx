import { Link } from 'expo-router';

import { FoundationScreen } from '@/components/foundation-screen';

export default function NotFoundScreen() {
  return (
    <FoundationScreen title="Página não encontrada" description="Este endereço não está disponível no Noryx.">
      <Link href="/" className="font-semibold text-base text-primary">Voltar para o início</Link>
    </FoundationScreen>
  );
}
