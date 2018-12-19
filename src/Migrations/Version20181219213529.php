<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20181219213529 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE food_category ADD provider_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE food_category ADD CONSTRAINT FK_2E013E83A53A8AA FOREIGN KEY (provider_id) REFERENCES food_provider (id)');
        $this->addSql('CREATE INDEX IDX_2E013E83A53A8AA ON food_category (provider_id)');
        $this->addSql('ALTER TABLE food_item DROP FOREIGN KEY FK_AA3C8DCFA53A8AA');
        $this->addSql('DROP INDEX IDX_AA3C8DCFA53A8AA ON food_item');
        $this->addSql('ALTER TABLE food_item DROP provider_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE food_category DROP FOREIGN KEY FK_2E013E83A53A8AA');
        $this->addSql('DROP INDEX IDX_2E013E83A53A8AA ON food_category');
        $this->addSql('ALTER TABLE food_category DROP provider_id');
        $this->addSql('ALTER TABLE food_item ADD provider_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE food_item ADD CONSTRAINT FK_AA3C8DCFA53A8AA FOREIGN KEY (provider_id) REFERENCES food_provider (id)');
        $this->addSql('CREATE INDEX IDX_AA3C8DCFA53A8AA ON food_item (provider_id)');
    }
}
