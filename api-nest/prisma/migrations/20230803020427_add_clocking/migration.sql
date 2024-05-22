-- CreateTable
CREATE TABLE `Clocking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `day` DATETIME(3) NOT NULL,
    `start_time` DATETIME(3) NULL,
    `end_time` DATETIME(3) NULL,
    `break_time` INTEGER NOT NULL,
    `note` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Clocking` ADD CONSTRAINT `Clocking_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
