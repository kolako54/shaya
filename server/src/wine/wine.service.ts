import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWineDto } from './dto/create-wine.dto';
import { UpdateWineDto } from './dto/update-wine.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Wine } from './entities/wine.entity';
import { Repository } from 'typeorm';
import { Flavour } from './entities/flavour.entity';
import { NotFoundError, skip, take } from 'rxjs';

@Injectable()
export class WineService {
  constructor(
    @InjectRepository(Wine)
    private readonly wineRepository: Repository<Wine>,
    @InjectRepository(Flavour)
    private readonly flavourRepository: Repository<Flavour>,
  ) {}
  async create(createWineDto: CreateWineDto) {
    // const flouvers = await Promise.all(
    //   createWineDto.flavours.map((flouver) =>
    //     this.preloadByFoundFlouvers(flouver),
    //   ),
    // );
    // const coffee = this.wineRepository.create({
    //   ...createWineDto,
    //   flavours: flouvers,
    // });
    // return this.wineRepository.save(coffee);
    const flavours = await Promise.all(
      createWineDto.flavours.map((flavour) =>
        this.createNonexistFlavour(flavour),
      ),
    );
    const wine = this.wineRepository.create({ ...createWineDto, flavours });
    return this.wineRepository.save(wine);
  }

  findAll(paginationQueryDto: PaginationQueryDto) {
    const { limit, offset } = paginationQueryDto;
    return this.wineRepository.find({
      relations: ['flavours'],
      take: limit,
      skip: offset,
    });
  }

  async findOne(id: number) {
    const wine = await this.wineRepository.findOne({
      where: { id },
      relations: ['flavours'],
    });
    if (!wine) {
      throw new NotFoundException(`coffee #${id} not found`);
    }
    return wine;
  }

  async update(id: number, updateWineDto: UpdateWineDto) {
    const flavours =
      updateWineDto.flavours &&
      (await Promise.all(
        updateWineDto.flavours.map((flavour) =>
          this.createNonexistFlavour(flavour),
        ),
      ));
    const wine = await this.wineRepository.preload({
      id: +id,
      ...updateWineDto,
      flavours,
    });
    if (!wine) {
      throw new NotFoundException(`wine #${id} not found!`);
    }
    this.wineRepository.save(wine);
  }

  async remove(id: number) {
    const foundedItem = await this.wineRepository.findOne({ where: { id } });
    if (!foundedItem)
      throw new NotFoundException(`not found any item related to remove!`);
    const removedItem = this.wineRepository.remove(foundedItem);
    return removedItem;
  }

  async createNonexistFlavour(flavour: string): Promise<Flavour> {
    const findNewOne = await this.flavourRepository.findOne({
      where: {
        name: flavour,
      },
    });
    if (findNewOne) return findNewOne;
    return this.flavourRepository.create({ name: flavour });
  }
}
