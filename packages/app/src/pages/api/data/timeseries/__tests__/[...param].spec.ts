import fs, { PathLike, PathOrFileDescriptor } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import handler from '../[...param]';

const { existsSync, readFileSync } = fs;

let fileExists = true;
const mockExistsSync = (_filePath: PathLike) => {
  return fileExists;
};

let fileContent = '';
const mockReadFileSync = (
  _path: PathOrFileDescriptor,
  _options:
    | {
        encoding: BufferEncoding;
        flag?: string | undefined;
      }
    | BufferEncoding
): string => {
  return fileContent;
};

describe('timeseries API route', () => {
  beforeAll(() => {
    fs.existsSync = mockExistsSync;
    (fs as any).readFileSync = mockReadFileSync;
  });

  afterAll(() => {
    fs.existsSync = existsSync;
    fs.readFileSync = readFileSync;
  });

  it('Should return 400 (Bad Request) for undefined root and/or metric', () => {
    const req = {
      query: {},
    } as NextApiRequest;
    const res = new MockResponse();
    handler(req, res as unknown as NextApiResponse);
    expect(res.lastStatusCode).toEqual(400);
  });
});

class MockResponse {
  lastStatusCode: number = -1;

  status(statusCode: number) {
    this.lastStatusCode = statusCode;
    return this;
  }

  end() {
    return this;
  }
}
